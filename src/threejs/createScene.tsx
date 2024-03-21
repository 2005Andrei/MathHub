import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Camera, Vector3 } from "three";
import { NormalVariable, NumberVariable, NumberVariableSpec } from "./Variable";
import { StyleOptions, useStyles } from "../utils/styles";
import { useDidUpdate } from "../utils/hooks/useDidUpdate";

const styles = ({ styled, theme }: StyleOptions) => ({
  variablesWrapper: styled.css`
    display: flex;
    justify-content: center;
    gap: 16px;
    overflow: hidden;
  `,

  fade: styled.css`
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(${theme.background}, rgba(${theme.backgroundRgb}, 0));

    &--upper {
      top: 0;
    }
    &--lower {
      bottom: 0;
      transform: rotate(180deg);
    }
  `,
});

type VariablesOptions = {
  [key: string]:
    | NumberVariableSpec
    | {
        label?: string;
        type: "normal";
        value: Vector3;
      };
};

type Variables<V extends VariablesOptions> = {
  [K in keyof V]: V[K]["value"];
};

interface SceneProps<V extends VariablesOptions> {
  camera: THREE.PerspectiveCamera;
  variables: Variables<V>;
}

interface Options<V extends VariablesOptions> {
  variables?: V;
}

const EMPTY_OBJ = {};

export function createScene<V extends VariablesOptions>(
  Component: React.FC<SceneProps<V>>,
  options: Options<V> = {},
) {
  return ({
    visible,
    onLoad,
    height,
    yOffset = 0,
  }: {
    visible: boolean;
    onLoad: () => void;
    height: number;
    yOffset?: number;
  }) => {
    useLayoutEffect(onLoad, []);

    const s = useStyles(styles);

    const [down, setDown] = useState(false);

    const camera = useMemo(() => {
      const scale = 1 - (height / 500) * 0.13;
      const fov = height / 10;
      const camera = new THREE.PerspectiveCamera(fov);
      camera.position.set(0, scale * 7.5, scale * -15);
      return camera;
    }, []);

    const variablesSpec = options.variables ?? (EMPTY_OBJ as V);
    const variableKeys = useMemo(() => Object.keys(variablesSpec), [variablesSpec]);

    const [variables, setVariables] = useState(() =>
      variableKeys.reduce((obj, _key) => {
        const key = _key as keyof V;
        obj[key] = variablesSpec[key].value;
        return obj;
      }, {} as Variables<V>),
    );

    const [rotate, setRotate] = useState(false);

    const timeoutRef = useRef<number>();
    useDidUpdate(() => {
      window.clearTimeout(timeoutRef.current);
      setRotate(false);
      timeoutRef.current = window.setTimeout(() => setRotate(true), 1500);
    }, [variables]);

    const setVariableValue = (key: string, value: unknown) => {
      setVariables((obj) => ({ ...obj, [key]: value }));
    };

    const orbitRef = useRef<any>(null);

    const rotationCallbacks = useRef(new Set<(vec: Camera) => void>());

    useEffect(() => {
      if (!visible) return;

      let stopped = false;
      const tick = () => {
        if (!stopped) requestAnimationFrame(tick);
        for (const rotationCallback of rotationCallbacks.current) {
          rotationCallback(camera);
        }
      };
      requestAnimationFrame(tick);
      return () => {
        stopped = true;
      };
    }, [camera, visible]);

    return (
      <>
        <div style={{ position: "relative", height }}>
          <div className={s("fade", { upper: true })} />
          <div className={s("fade", { lower: true })} />

          <Canvas
            key={height}
            style={{ height, userSelect: "none", cursor: down ? "grabbing" : "grab" }}
            camera={camera}
            onMouseDown={() => setDown(true)}
            onMouseUp={() => setDown(false)}
          >
            {visible && (
              <>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  decay={0}
                  intensity={Math.PI}
                />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

                <OrbitControls
                  rotateSpeed={0.3}
                  enableRotate
                  autoRotate={rotate}
                  autoRotateSpeed={1}
                  enablePan={false}
                  enableZoom={false}
                  ref={orbitRef}
                />

                <mesh position={[0, yOffset, 0]}>
                  <Component camera={camera} variables={variables} />
                </mesh>
              </>
            )}
          </Canvas>
        </div>

        <div className={s("variablesWrapper")}>
          {variableKeys.map((key) => {
            const spec = variablesSpec[key];
            const value = variables[key] as any;
            if (spec.type === "number")
              return (
                <NumberVariable
                  key={key}
                  dataKey={key}
                  value={value}
                  onValueChange={(value) => setVariableValue(key, value)}
                  spec={spec}
                />
              );
            if (spec.type === "normal") {
              return (
                <NormalVariable
                  key={key}
                  dataKey={key}
                  value={value}
                  onValueChange={(value) => setVariableValue(key, value)}
                  spec={spec}
                  visible={visible}
                  addRotationCallback={(fn) => rotationCallbacks.current.add(fn)}
                  removeRotationCallback={(fn) => rotationCallbacks.current.delete(fn)}
                />
              );
            }
            return null;
          })}
        </div>
      </>
    );
  };
}
