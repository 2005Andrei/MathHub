---
title: "Planes in 3D space"
description: "Visual and interactive introduction to 2D planes in 3D space."
image: "/images/og-planes.png"
publishedAt: "2024-11-19"
tags: ["Algebra geometrica", "Interactiv", "Vectori"]
---

Un plan in 3D poate fi vazut caa o suprafata infinita, impartind spatiul in dou jumatati.

<Scene autoRotate scene="what-is-a-plane" height={480} yOffset={-0.5} zoom={1.2} angle={10} usesVariables />


## Descrierea planelor

Sunt mai multe moduri de a defini un plan, precum:

 1. un punct in spatiu si o normala,
 2. trei puncte in spatiu, formand un triunghi, sau
 3. o normala si o distanta fata de un punct de origine.

<Note>
  In aceasta lectie, termenul _normala_ se va referi la vectorul _ortogonal suprafetei_, conventional notat cu $\vec{n}$.
</Note>


<Scene scene="point-and-normal-with-plane" height={460} yOffset={-1.2} zoom={1.35} usesVariables />


<Scene scene="plane-intersecting-points" height={500} yOffset={-1} zoom={1.3} usesVariables />

Această metodă de descriere a planurilor — în termeni de un punct și o normală — este a planurilor.

Putem descrie un plan și folosind trei puncte în spațiul 3D $a$, $b$, $c$ care formează un triunghi:

<Scene scene="three-points" height={440} zoom={1.4} yOffset={-0.8} autoRotate />

Triunghiul formează un plan implicit, dar pentru a putea face ceva util cu planul, va trebui să calculăm normala sa $\vec{n}$. Odată ce am calculat normala planului, putem folosi această normală împreună cu unul dintre cele trei puncte ale triunghiului pentru a descrie planul în forma punct-normal.

<Scene scene="three-points-normal-centered" height={420} zoom={1.4} yOffset={-0.8} autoRotate />


Putem folosi $b - a$ și $c - a$ ca doi vectori de muchie care sunt paraleli cu suprafața planului.

<Scene scene="three-points-edge-vectors" height={400} zoom={1.4} yOffset={-0.8} autoRotate />

Prin faptul că sunt paraleli cu suprafața planului, vectorii $b - a$ și $c - a$ sunt perpendiculare pe normala planului. Aici produsul vectorial devine util pentru noi.


Produsul [vectorial][cross_product] ia doi vectori $\vec{a}$ și $\vec{b}$ și returnează un vector $\vec{c}$ care este perpendicular pe amândoi.

[cross_product]: https://en.wikipedia.org/wiki/Cross_product

<p className="mathblock">$$\vec{c} = \vec{a} × \vec{b}$$</p>

De exemplu, având vectorii $\vec{i} = (1, 0, 0)$ și $\vec{j} = (0, 1, 0)$, produsul lor vectorial este vectorul $(0, 0, 1)$, pe care îl vom denumi $\vec{k}$:

<Scene scene="cross-product" height={370} zoom={1.7} yOffset={-0.0} autoRotate />

<p className="mathblock">$$\vec{d} = (b - a) × (c - a)$$</p>

<Scene scene="three-points-cross-product" height={440} zoom={1.4} yOffset={-0.8} autoRotate />

<SmallNote label="" center>$\vec{d}$ a fost redimensionat pentru scopuri ilustrative.</SmallNote>

$\vec{d}$ indică direcția corectă, dar nu este o normală. Pentru ca $\vec{d}$ să fie o normală, magnitudinea sa trebuie să fie egală cu 1. Putem normaliza $\vec{d}$ împărțindu-l la magnitudinea sa, rezultatul căruia îl vom atribui lui $\vec{n}$:

<p className="mathblock">$$\vec{n} = \dfrac{\vec{d}}{\|\vec{d}\|}$$</p>

Aceasta ne dă o normală $\vec{n}$ unde $|\vec{n}| = 1$:

<Scene scene="three-points-normal" height={420} zoom={1.4} yOffset={-0.8} autoRotate />

După ce am găsit normală triunghiului $\vec{n}$, putem să o folosim împreună cu oricare dintre punctele $a$, $b$, $c$ pentru a descrie planul care conține cele trei puncte în forma punct-normal.

<Scene scene="three-points-plane" height={460} zoom={1.1} yOffset={-1.6} autoRotate />

Nu contează care dintre punctele $a$, $b$, $c$ folosim ca punct în forma punct-normal; vom obține întotdeauna același plan.


### Forma cu normală constantă

Mai există încă o modalitate de a descrie un plan pe care o vom analiza, și anume printr-o normală $\vec{n}$ și o distanță $d$.

<Scene scene="constant-normal-form" height={480} zoom={1.3} usesVariables />

Aceasta este _forma cu normală constantă_ a planurilor. Face mult mai simple multe calcule folosind planuri.

În forma cu normală constantă, distanța $d$ indică cât de aproape ajunge planul de origine. Gândit altfel: înmulțind normală $\vec{n}$ cu $d$ se obține punctul de pe plan care este cel mai aproape de origine.

<SmallNote label="">Aceasta este o simplificare. Mai formal, având un punct $P$ pe un plan al cărui normal este $\vec{n}$, putem descrie toate punctele $X$ de pe plan în două forme: forma punct-normal $\vec{n} \cdot (X - P) = 0$, și forma cu normală constantă $\vec{n} \cdot X = d$ unde $d = \vec{n} \cdot P$. Vezi [lecturi suplimentare][further_reading].</SmallNote>

Pentru a înțelege diferența dintre formele punct-normal și cu normală constantă, ia acest exemplu care descrie același plan în ambele forme:

<Scene scene="point-normal-and-constant-normal-form" height={460} zoom={1.4} usesVariables />

Săgeata verde reprezintă $d \times \vec{n}$ din forma cu normală constantă, în timp ce punctul albastru și săgeata reprezintă punctul $p$ și normală $\vec{n}$ din forma punct-normal.

Tranzitarea de la forma punct-normal la forma cu normală constantă este foarte simplă: distanța $d$ este [produsul scalar][dot_product] dintre $\vec{n}$ și $p$.

[dot_product]: https://en.wikipedia.org/wiki/Dot_product

<p className="mathblock">$$ d = \vec{n} \cdot p $$</p>

<SmallNote label="" center>Dacă nu ești familiarizat cu produsul scalar, nu-ți face griji. Vom discuta despre acesta mai târziu.</SmallNote>

<Note><p>Notarea pentru $\vec{n}$ și $p$ ar putea părea că indică tipuri diferite, dar amândouă sunt vectori. Eu diferențiez între punctele din spațiu (de exemplu, $x$ și $y$) și vectorii de direcție (de exemplu, $\vec{a}$ și $\vec{b}$) folosind doar notarea cu săgeată pentru vectorii de direcție.</p></Note>

Normală $\vec{n}$ rămâne aceeași în ambele forme.


## Distanța față de plan

Având un punct oarecare $x$ și un plan $P$ în forma cu normală constantă, am putea dori să aflăm cât de departe este punctul de plan. Cu alte cuvinte, care este distanța minimă pe care trebuie să o parcurgă punctul $x$ pentru a ajunge pe plan?

<Scene scene="point-and-plane" height={440} zoom={1.3} yOffset={-0.5} autoRotate />

Putem reformula problema diferit, construind un plan $P_x$ care conține punctul $x$ și care este paralel cu planul $P$. Acest lucru îl putem face în forma punct-normal folosind $x$ ca punct și normală planului $P$ ($\vec{n}$) ca normală:

<Scene scene="point-distance-step-1" height={440} zoom={1.3} yOffset={-0.5} autoRotate />

Având două planuri paralele, putem reformula problema ca fiind găsirea distanței dintre cele două planuri. Aceasta devine trivială folosind forma lor cu normală constantă, deoarece ne permite să luăm diferența dintre componentele lor de distanță $d_1$ și $d_2$.

Așadar, să găsim distanța planului $P_x$ folosind ecuația $d = \vec{n} \cdot p$ despre care am învățat:

<Scene scene="point-distance-step-2" height={440} zoom={1.3} yOffset={-0.5} autoRotate />

Cu două distanțe $d_1$ și $d_2$ de la planurile $P$ și $P_x$, soluția devine simplă:

<p className="mathblock">$$ d_1 - d_2 $$</p>

<Scene scene="point-distance-step-3" height={440} zoom={1.3} yOffset={-0.5} autoRotate />

Așadar, pentru a simplifica, având un plan $P$ cu normală $\vec{n}$ și distanță $d$, putem calcula distanța unui punct $x$ față de planul $P$ astfel:

<p className="mathblock">$$ d - (\vec{n} \cdot x) $$</p>

Distanța poate fi pozitivă sau negativă, în funcție de ce parte a planului se află punctul.


### Proiectarea unui punct pe un plan

Un caz în care calcularea distanței unui punct față de un plan devine utilă este, de exemplu, atunci când dorești să proiectezi un punct pe un plan.

Având un punct $x$ pe care dorim să îl proiectăm pe planul $P$, al cărui normală este $\vec{n}$ și distanță este $d$, putem face acest lucru destul de ușor. Mai întâi, să definim $D$ ca distanța punctului față de plan:

<p className="mathblock">$$ D = d - (\vec{n} \cdot x) $$</p>

Înmulțind normală planului $\vec{n}$ cu $D$, obținem un vector care, atunci când este adăugat la $x$, proiectează punctul pe plan. Vom numi punctul proiectat $S$:

<p className="mathblock">$$ S = x + (\vec{n} \times D) $$</p>

<Scene scene="project-point-onto-plane-along-normal" height={440} zoom={1.3} yOffset={-0.5} autoRotate />

Proiecția are loc de-a lungul normalelor planului, ceea ce este uneori util. Cu toate acestea, este mult mai util să poți proiecta un punct pe un plan de-a lungul unei direcții _arbitrare_ în schimb. A face acest lucru presupune găsirea punctului de intersecție dintre o linie și un plan.

### Intersecția linie-plan

Putem descrie linii în spațiul 3D folosind un punct $p$ și o normală $\vec{n}$. Normală $\vec{n}$ descrie orientarea liniei, iar punctul $p$ reprezintă un punct prin care linia trece.

<Scene scene="line" height={380} zoom={1.6} yOffset={-0.6} usesVariables />

În acest capitol, linia va fi compusă din punctul $p_l$ și normală $\vec{n_l}$, în timp ce planul—dat în forma constant-normală—are o normală $\vec{n_p}$ și o distanță $d_p$.

<Scene scene="project-point-onto-plane" height={420} yOffset={-1} zoom={1.5} usesVariables />

Scopul nostru va fi să găsim o distanță $D$ pe care punctul $p_l$ trebuie să o parcurgă de-a lungul normalăi $\vec{n_l}$ astfel încât să ajungă pe plan.

Putem determina distanța $D_p$ pe care ar trebui să o parcurgem dacă $\vec{n_l}$ și $\vec{n_p}$ ar fi paralele, ceea ce am făcut atunci când proiectam de-a lungul normalăi planului.

<p className="mathblock">$$ D_p = d_p - (\vec{n_p} \cdot p_l) $$</p>

Să încercăm să proiectăm punctul $p_l$ de-a lungul normalăi $\vec{n_l}$ folosind $D_p$ ca scalare, astfel:

<p className="mathblock">$$ P = p_l + \vec{n_l} \times D_p $$</p>

Vom vizualiza punctul $P$ ca un punct roșu:

<Scene scene="project-point-onto-plane-2" height={450} yOffset={-1} zoom={1.5} usesVariables />

Pe măsură ce $\vec{n_l}$ și $\vec{n_p}$ devin paralele, $D_p$ ne aduce tot mai aproape de soluția corectă. Totuși, pe măsură ce unghiul dintre $\vec{n_l}$ și $\vec{n_p}$ crește, $D_p$ devine tot mai mic și eronat.

Aici intervine produsul scalar. Pentru două vectori $\vec{a}$ și $\vec{b}$, produsul scalar este definit ca

<p className="mathblock">$$\vec{a} \cdot \vec{b} = \|\vec{a}\|\,\|\vec{b}\|\,\cos\theta$$</p>


unde $\theta$ este unghiul dintre $\vec{a}$ și $\vec{b}$.

Să considerăm produsul scalar dintre $\vec{n_l}$ și $\vec{n_p}$. Deoarece ambele normale sunt vectori unitate ale căror magnitudini sunt 1

<p className="mathblock">$$\|\vec{n_l}\| = \|\vec{n_p}\| = 1$$</p>

putem elimina magnitudinile lor din ecuație,

<p className="mathblock">$$\vec{n_l} \cdot \vec{n_p} = \cos\theta$$</p>


făcând produsul scalar dintre $\vec{n_l}$ și $\vec{n_p}$ cosinusul unghiului dintre ele.

Pentru doi vectori, cosinusul unghiurilor lor se apropie de 1 pe măsură ce vectorii devin din ce în ce mai paraleli și se apropie de 0 pe măsură ce devin perpendiculare.

Deoarece $D_p$ devine din ce în ce mai mic pe măsură ce $\vec{n_l}$ și $\vec{n_p}$ devin tot mai perpendiculare, putem folosi $\vec{n_l} \cdot \vec{n_p}$ ca un numitor pentru $D_p$. Vom atribui această versiune scalată a lui $D_p$ lui $D$:

<p className="mathblock">$$ D = \dfrac{D_p}{\vec{n_l} \cdot \vec{n_p}} $$</p>

Cu $D$ ca distanță scalată, găsim punctul de intersecție $P$ prin:

<p className="mathblock">$$ P = p_l + \vec{n_l} \times D $$</p>

<Scene scene="project-point-onto-plane-3" height={450} yOffset={-1} zoom={1.5} usesVariables />

Acum putem elimina $D_p$, care a fost definit ca $d_p - (\vec{n_p} \cdot p_l)$, obținând astfel ecuația completă pentru $D$:

<p className="mathblock">$$ D = \dfrac{d_p - (\vec{n_p} \cdot p_l)}{\vec{n_l} \cdot \vec{n_p}} $$</p>

Introducând acest lucru în cod, obținem:

```cs
Vector3 LinePlaneIntersection(Line line, Plane plane) {
  float denom = Vector3.Dot(line.normal, plane.normal);
  float dist = Vector3.Dot(plane.normal, line.point);
  float D = (plane.distance - dist) / denom;
  return line.point + line.normal * D;
}
```

Totuși, codul nostru nu este complet încă. În cazul în care linia este paralelă cu suprafața planului, linia și planul nu se intersectează.

<Scene scene="project-point-onto-plane-4" height={450} yOffset={-1} zoom={1.5} autoRotate />

Acest lucru se întâmplă atunci când $\vec{n_l}$ și $\vec{n_p}$ sunt perpendiculare, caz în care produsul lor scalar este zero. Așadar, dacă $\vec{n_l} \cdot \vec{n_p} = 0$, linia și planul nu se intersectează. Acest lucru ne oferă un test ușor pe care îl putem adăuga în codul nostru pentru a returna un rezultat de "fără intersecție".

Totuși, pentru multe aplicații, vom dori să tratăm cazurile în care linia este aproape paralelă ca fiind efectiv paralelă. Pentru a face acest lucru, putem verifica dacă produsul scalar este mai mic decât o valoare foarte mică—de obicei numită epsilon.

```cs
float denom = Vector3.Dot(line.normal, plane.normal);
if (Mathf.Abs(denom) < EPSILON) {
    return null; // Linia este paralelă cu suprafața planului
}
```

<SmallNote label="" center>Vezi dacă poți înțelege de ce este folosit Mathf.Abs aici. Vom discuta despre asta mai târziu, așa că vei vedea dacă ai dreptate.</SmallNote>

Vom analiza cum să selectăm valoarea epsilon într-un capitol viitor despre intersecțiile a două planuri.

Cu asta, implementarea noastră a intersecției linie-plan devine:

```cs
Vector3 LinePlaneIntersection(Line line, Plane plane) {
  float denom = Vector3.Dot(line.normal, plane.normal);
  if (Mathf.Abs(denom) < EPSILON) {
      return null; // Linia este paralelă cu suprafața planului
  }

  float dist = Vector3.Dot(plane.normal, line.point);
  float D = (plane.distance - dist) / denom;
  return line.point + line.normal * D;
}
```


### Razele și liniile

Am vorbit despre intersecțiile linie-plan, dar am mințit puțin, vizualizând în schimb intersecțiile rază-plan pentru claritate vizuală.

<Scene scene="project-point-onto-plane" height={450} yOffset={-1} zoom={1.5} usesVariables />

O rază și o linie sunt foarte asemănătoare; amândouă sunt reprezentate printr-o normală $\vec{n_l}$ și un punct $p_l$.

Diferența este că o rază (colorată roșu) se extinde în direcția lui $\vec{n_l}$ de la $p_l$, în timp ce o linie (colorată verde) se extinde și în cealaltă direcție:

<Scene scene="ray-and-line" height={450} yOffset={-1} zoom={1.5} usesVariables />

Ceea ce înseamnă acest lucru pentru intersecții este că o rază nu va intersecta planurile atunci când călătorește înapoi pe direcția normală a sa:

<Scene scene="ray-and-line-plane-intersection" height={450} yOffset={-1} zoom={1.5} usesVariables />

Implementarea noastră pentru intersecțiile rază-plan va diferi de implementarea existentă a intersecțiilor linie-plan doar prin faptul că ar trebui să returneze un rezultat de "fără intersecție" atunci când normală razei $\vec{n_l}$ este orientată "departe" de normală planului $\vec{n_p}$ la un unghi obtuz.

Deoarece $D$ reprezintă distanța până la punctul de intersecție pe direcția normală, am putea returna "fără intersecție" atunci când $D$ devine negativ:

```cs
if (D < 0) {
  return null;
}
```


Dar atunci ar trebui să calculăm mai întâi $D$. Acest lucru nu este necesar, deoarece $D$ devine negativ ca urmare a faptului că produsul scalar $\vec{n_l} \cdot \vec{n_p}$ este un număr negativ atunci când $\vec{n_l}$ și $\vec{n_p}$ sunt la un unghi obtuz între 90° și 180°.

<SmallNote label="">Dacă acest lucru nu este evident, este util să ne amintim că produsul scalar encodează cosinusul unghiului dintre cei doi vectori, motiv pentru care produsul scalar devine negativ pentru unghiuri obtuze.</SmallNote>

Știind acest lucru, putem modifica testul nostru inițial pentru "normale paralele" din aceasta:

```cs
Vector3 LinePlaneIntersection(Line line, Plane plane) {
  float denom = Vector3.Dot(line.normal, plane.normal);
  if (Mathf.Abs(denom) < EPSILON) {
    return null; // Line is parallel to plane's surface
  }
  // ...
}
```

In aceasta:

```cs
Vector3 RayPlaneIntersection(Line line, Plane plane) {
  float denom = Vector3.Dot(line.normal, plane.normal);
  if (denom < EPSILON) {
    // Raza este paralelă cu suprafața planului sau se îndreaptă departe de aceasta
    return null;
  }
  // ...
}
```

The $\vec{n_l} \cdot \vec{n_p} < \epsilon$ check covers both the _"line parallel to plane"_ case _and_ the case where the two normal vectors are at an obtuse angle.

<SmallNote>$\epsilon$ is the symbol for epsilon.</SmallNote>



## Plane-plane intersection

The intersection of two planes forms an infinite line.

<Scene scene="intersecting-planes" height={500} yOffset={0.5} zoom={1.4} usesVariables />

As a quick refresher: lines in 3D space are represented using a point $p$ and normal $\vec{n}$ where normal $\vec{n}$ describes the line's orientation, while the point $p$ describes a point which the line passes through.

<Scene scene="line" height={380} zoom={1.6} yOffset={-0.6} usesVariables />

Let's take two planes $P_1$ and $P_2$ whose normals are $\vec{n_1}$ and $\vec{n_2}$.

Finding the direction vector of $P_1$ and $P_2$'s intersection is deceptively simple. Since the line intersection of two planes lies on the surface of both planes, the line must be perpendicular to both plane normals, which means that the direction of the intersection is the cross product of the two plane normals. We'll assign it to $\vec{d}$.

<p className="mathblock">$$\vec{d} = \vec{n_1} × \vec{n_2}$$</p>

The magnitude of the cross product is equal to the [area of the parallelogram][area_parallelogram] formed by the two component vectors. This means that we can't expect the cross product to be a unit vector, so we'll normalize $\vec{d}$ and assign the normalized direction vector to $\vec{n}$.

[area_parallelogram]: https://en.wikipedia.org/wiki/Cross_product#/media/File:Cross_product_parallelogram.svg

<p className="mathblock">$$\vec{n} = \dfrac{\vec{d}}{\|\vec{d}\|}$$</p>

This gives us the intersection's normal $\vec{n}$. Let's zoom in and see this close up.

<Scene scene="intersecting-planes-point-and-normal" height={380} zoom={2} usesVariables />

But this is only half of the puzzle! We'll also need to find a point in space to represent the line of intersection (i.e. a point which the line passes through). We'll take a look at how to do just that, right after we discuss the no-intersection case.


### Handling parallel planes

Two planes whose normals are parallel will never intersect, which is a case that we'll have to handle.

<Scene scene="parallel-planes" height={480} zoom={1.3} yOffset={-0.5} autoRotate />

The cross product of two parallel normals is $(0, 0, 0)$. So if $\|\vec{n_1} × \vec{n_2}\| = 0$, the planes do not intersect.

As previously mentioned, for many applications we'll want to treat planes that are _almost_ parallel as being parallel. This means that our plane-plane intersection procedure should yield a result of "no intersection" when the magnitude of $\vec{d}$ is less than some very small number called epsilon.

```cs
Line PlanePlaneIntersection(Plane P1, Plane P2) {
  Vector3 direction = Vector3.cross(P1.normal, P2.normal);
  if (direction.magnitude < EPSILON) {
    return null; // Roughly parallel planes
  }
  // ...
}
```

But what should the value of epsilon be?

Given two normals $\vec{n_1}$ and $\vec{n_2}$ where the angle between $\vec{n_1}$ and $\vec{n_2}$ is $\theta°$, we can find a reasonable epsilon by charting $\|\vec{n_1} × \vec{n_2}\|$ for different values of $\theta°$:

<Image src="~/cross-product-magnitude-by-angle.png" plain width={840} />

<SmallNote label="" center>Both of the axes are [logarithmic][log_chart].</SmallNote>

[log_chart]: https://en.wikipedia.org/wiki/Logarithmic_scale

The relationship is linear: as the angle between the planes halves, so does the magnitude of the cross product of their normals. $\theta° = 1$ yields a magnitude of $0.01745$, and $\theta° = 0.5$ yields half of that.

So to determine the epsilon, we can ask: how low does the angle in degrees need to become for us to consider two planes parallel? Given an angle $\theta°$, we can find the epsilon $\epsilon$ via:

<p className="mathblock">$$\epsilon = 0.01745 \times \theta°$$</p>

If that angle is 1/256°, then we get:

<p className="mathblock">$$\dfrac{0.01745}{256} \approx 0.000068 $$</p>

With this you can determine the appropriate epsilon based on how small the angle between the planes needs to be for you to consider them parallel. That will depend on your use case.

### Finding a point of intersection

Having computed the normal and handled parallel planes, we can move on to finding a point $p$ along the line of intersection.

Since the line describing a plane-plane intersection is infinite, there are infinitely many points we could choose as $p$.

<Scene scene="intersecting-planes-points" height={400} zoom={1.3} yOffset={0.5} usesVariables />

We can narrow the problem down by taking the plane parallel to the two plane normals $\vec{n_1}$, $\vec{n_2}$ and observing that it intersects the line at a single point.

<Scene scene="intersecting-planes-virtual-plane" height={470} zoom={1.3} yOffset={-1} usesVariables />

Since the point lies on the plane parallel to the two plane normals, we can find it by exclusively traveling along those normals.

The simplest case is the one where $P_1$ and $P_2$ are perpendicular. In that case, the solution is just $n_1 \times d_1 + n_2 \times d_2$. Here's what that looks like visually:

<Scene scene="intersecting-planes-offset-2" height={470} yOffset={-0.5} usesVariables />

When dragging the slider, notice how the tip of the parallelogram gets further away from the point of intersection as the planes become more parallel.

We can also observe that as we get further away from the point of intersection, the longer of the two vectors (colored red) pushes us further away from the point of intersection than the shorter (blue) vector does. This is easier to observe if we draw a line from the origin to the point of intersection:

<Scene scene="intersecting-planes-offset-4" height={470} yOffset={-0.5} usesVariables />

Let's define $k_1$ and $k_2$ as the scaling factors that we apply to $\vec{n_1}$ and $\vec{n_2}$ (the result of which are the red and blue vectors). Right now we're using the distance components $d_1$ and $d_2$ of the planes as the scaling factors:

<p className="mathblock">$$ k_1 = d_1 $$<br />$$ k_2 = d_2 $$</p>

To solve this asymmetric pushing effect, we need to travel less in the direction of the longer vector as the planes become more parallel. We need some sort of "pulling factor" that adjusts the vectors such that their tip stays on the line as the planes become parallel. 

Here our friend the dot product comes in handy yet again. When the planes are perpendicular the dot product of $\vec{n_1}$ and $\vec{n_2}$ equals 0, but as the planes become increasingly parallel, it approaches 1. We can use this to gradually increase our yet-to-be-defined pulling factor.

<p className="mathblock">$$ k_1 = d_1 + pull_1 \times (\vec{n_1} \cdot \vec{n_2}) $$<br />$$ k_2 = d_2 + pull_2 \times (\vec{n_1} \cdot \vec{n_2}) $$</p>

Let's give the dot product $\vec{n_1} \cdot \vec{n_2}$ the name $dot$ to make this a bit less noisy:

<p className="mathblock">$$ k_1 = d_1 + pull_1 \times dot $$<br />$$ k_2 = d_2 + pull_2 \times dot $$</p>

The perfect pulling factors happen to be the distance components $d_1$ and $d_2$ used as counterweights against each other!

<p className="mathblock">$$ k_1 = d_1 - d_2 \times dot $$<br />$$ k_2 = d_2 - d_1 \times dot $$</p>

Consider why this might be. When $\vec{n_1}$ and $\vec{n_2}$ are perpendicular, their dot product equals 0, which results in

<p className="mathblock">$$ k_1 = d_1 $$<br />$$ k_2 = d_2 $$</p>

which we know yields the correct solution.

In the case where $\vec{n_1}$ and $\vec{n_2}$ are parallel, their dot product equals 1, which results in:

<p className="mathblock">$$ k_1 = d_1 - d_2 $$<br />$$ k_2 = d_2 - d_1 $$</p>

Because the absolute values of $d_1 - d_2$ and $d_2 - d_1$ are equal, it means that the magnitude of the two vectors—defined as $\vec{n_1} \times k_1$ and $\vec{n_2} \times k_2$—is equal:

<p className="mathblock">$$ \|\vec{n_1} \times k_1\| = \|\vec{n_2} \times k_2\| $$</p>

This means that the magnitude of our vectors will become _more_ equal as the planes become parallel, which is what we want!

Let's see this in action:

<Scene scene="intersecting-planes-offset-3" height={470} yOffset={-0.5} usesVariables />

The vectors stay on the line, but they become increasingly too short as $\vec{n_1}$ and $\vec{n_2}$ become parallel.

Yet again, we can use the dot product. Since we want the length of the vectors to increase as the planes become parallel, we can divide our scalars $k_1$ and $k_2$ by $1 - abs(dot)$ where $dot$ is the dot product of $\vec{n_1}$ and $\vec{n_2}$ and $abs(dot)$ is the absolute value of $dot$.

<p className="mathblock">$$ k_1 = (d_1 - d_2 \times dot) \,/\, (1 - abs(dot)) $$<br />$$ k_2 = (d_2 - d_1 \times dot) \,/\, (1 - abs(dot)) $$</p>

The result of this looks like so:

<Scene scene="intersecting-planes-offset-5" height={440} usesVariables />

Using $1 - abs(dot)$ as the denominator certainly increases the size of the parallelogram, but by too much.

However, notice what happens when we visualize the quadrants of the parallelogram:

<Scene scene="intersecting-planes-offset-7" height={440} angle={25} usesVariables />

As the planes become more parallel, the point of intersection approaches the center of the parallelogram.

In understanding why that is, consider the effect that our denominator $1 - abs(dot)$ has on the area of the parallelogram. When $1 - abs(dot) = 0.5$, both of the vectors forming the parallelogram double in length, which has the effect of quadrupling the area of the parallelogram.

<Image src="~/area-of-parallelogram.svg" plain width={600} />

This means that when we scale the component vectors of the parallelogram by

<p className="mathblock">$$ \dfrac{1}{1 - abs(dot)} $$</p>

it has the effect of scaling the area of the parallelogram by:

<p className="mathblock">$$ (\dfrac{1}{1 - abs(dot)})^2 $$</p>

To instead scale the _area_ of the parallelogram by $1 \,/\, (1 - abs(dot))$, we need to square $dot$ in the denominator:

<p className="mathblock">$$ \dfrac{1}{1 - dot^2} $$</p>

<SmallNote label="" center>Squaring allows us to remove $abs()$ because the square of a negative number is positive.</SmallNote>

With this, our scalars $k_1$ and $k_2$ become

<p className="mathblock">$$ k_1 = (d_1 - d_2 \times dot) \,/\, (1 - dot^2) $$<br />$$ k_2 = (d_2 - d_1 \times dot) \,/\, (1 - dot^2) $$</p>

which scales the parallelogram such that its tip lies at the point of intersection:

<Scene scene="intersecting-planes-offset-6" height={400} yOffset={-1} usesVariables />

Putting all of this into code, we get:

```cs
float dot = Vector3.Dot(P1.normal, P2.normal);
float denom = 1 - dot * dot;

float k1 = (P1.distance - P2.distance * dot) / denom;
float k2 = (P2.distance - P1.distance * dot) / denom;

Vector3 point = P1.normal * k1 + P2.normal * k2;
```

<SmallNote label="" center>Based on code from [Real-Time Collision Detection by Christer Ericson][further_reading]</SmallNote>

Which through some mathematical magic can be optimized down to:

```cs
Vector3 direction = Vector3.cross(P1.normal, P2.normal);

float denom = Vector3.Dot(direction, direction);
Vector3 a = P1.distance * P2.normal;
Vector3 b = P2.distance * P1.normal;
Vector3 point = Vector3.Cross(a - b, direction) / denom;
```

<SmallNote label="" center>How this optimization works can be found in chapter 5.4.4 of [Real-Time Collision Detection by Christer Ericson][further_reading].</SmallNote>

This completes our plane-plane intersection implementation:

```cs
Line PlanePlaneIntersection(Plane P1, Plane P2) {
  Vector3 direction = Vector3.cross(P1.normal, P2.normal);
  if (direction.magnitude < EPSILON) {
    return null; // Roughly parallel planes
  }

  float denom = Vector3.Dot(direction, direction);
  Vector3 a = P1.distance * P2.normal;
  Vector3 b = P2.distance * P1.normal;
  Vector3 point = Vector3.Cross(a - b, direction) / denom;

  Vector3 normal = direction.normalized;

  return new Line(point, normal);
}
```

By the way, an interesting property of only traveling along the plane normals is that it yields the point on the line of intersection that is closest to the origin. Cool stuff!


## Three plane intersection

Given three planes $P_1$, $P_2$, $P_3$, there are five possible configurations in which they intersect or don't intersect:

 1. All three planes are parallel, with none of them intersecting each other.
 2. Two of the planes are parallel, and the third plane intersects the other two.
 3. All three planes intersect along a single line.
 4. The three planes intersect each other in pairs, forming three parallel lines of intersection.
 5. All three planes intersect each other at a single point.

<Scene scene="three-plane-intersection-configurations" height={400} yOffset={-1} zoom={1.1} usesVariables />

When finding the point of intersection, we'll first need to determine whether all three planes intersect at a single point—which for configurations 1 through 4, they don't.

Given $\vec{n_1}$, $\vec{n_2}$, $\vec{n_3}$ as the plane normals for $P_1$, $P_2$, $P_3$, we can determine whether the planes intersect at a single point with the formula:

<p className="mathblock">$$ \vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) \neq 0 $$</p>

When I first saw this, I found it hard to believe this would work for all cases. Still, it does! Let's take a deep dive to better understand what's happening.

### Two or more planes are parallel

We'll start with the configurations where two or more planes are parallel:

<Scene scene="three-planes-some-parallel" height={400} autoRotate />

If $\vec{n_2}$ and $\vec{n_3}$ are parallel then $\vec{n_2} × \vec{n_3}$ is a vector whose magnitude is zero.

<p className="mathblock">$$\|\vec{n_2} × \vec{n_3}\| = 0$$</p>

And since the dot product is a multiple of the magnitudes of its component vectors:

<p className="mathblock">$$a \cdot b = \|a\|\,\|b\|\,\cos\theta$$</p>

the final result is zero whenever $\vec{n_2}$ and $\vec{n_3}$ are parallel.

<p className="mathblock">$$\vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) = 0$$</p>

This takes care of the "all-planes-parallel" configuration, and the configuration where $\vec{n_2}$ and $\vec{n_3}$ are parallel

<Scene scene="three-planes-n2-n3-parallel" height={440} zoom={1.4} xRotation={-20} autoRotate />

With that, let's consider the case where $\vec{n_1}$ is parallel to either $\vec{n_2}$ or $\vec{n_3}$ but $\vec{n_2}$ and $\vec{n_3}$ are not parallel to each other.

Let's take the specific case where $\vec{n_1}$ is parallel to $\vec{n_2}$ but $\vec{n_3}$ is parallel to neither.

<Scene scene="three-planes-n1-n2-parallel" height={440} zoom={1.4} xRotation={-20} autoRotate />

Here the cross product $\vec{n_2} × \vec{n_3}$ is a vector (colored red) that's perpendicular to both $\vec{n_2}$ and $\vec{n_3}$.

<Scene scene="three-planes-n1-n2-parallel-cross" height={440} zoom={1.4} xRotation={-20} autoRotate />

Since $\vec{n_1}$ is parallel to $\vec{n_2}$, that means that $\vec{n_2} × \vec{n_3}$ is also perpendicular to $\vec{n_1}$. As we've learned, the dot product of two perpendicular vectors is zero, meaning that:

<p className="mathblock">$$\vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) = 0$$</p>

This also holds in the case where $\vec{n_1}$ is parallel to $\vec{n_3}$ instead of $\vec{n_2}$.

### Parallel lines of intersection

We've demonstrated that two of the three normals being parallel results in $\vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) = 0$. But what about the configurations where the three planes intersect along parallel lines? Those configurations have no parallel normals.

<Scene scene="three-planes-three-lines" height={430} zoom={1.2} yOffset={0.5} autoRotate />

As we learned when looking at plane-plane intersections, the cross product of two plane normals gives us the direction vector of the planes' line of intersection.

<Scene scene="three-planes-three-lines-cross" height={460} zoom={1.4} autoRotate />

When all of the lines of intersection are parallel, all of the plane normals defining those lines are perpendicular to them.

Yet again, because the dot product of perpendicular vectors is 0 we can conclude that $\vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) = 0$ for these configurations as well.

We can now begin our implementation. As usual, we'll use an epsilon to handle the _"roughly parallel"_ case:

```cs
Vector3 ThreePlaneIntersection(Plane P1, Plane P2, Plane P3) {
  Vector3 cross = Vector3.Cross(P2.normal, P3.normal);
  float dot = Vector3.Dot(P1.normal, cross);
  if (Mathf.Abs(dot) < EPSILON) {
    return null; // Planes do not intersect at a single point
  }
  // ...
}
```

## Computing the point intersection

We want to find the point at which our three planes $P_1$, $P_2$, $P_3$ intersect:

<Scene scene="three-intersecting-planes-point" height={520} zoom={1.25} yOffset={-1} xRotation={-17} autoRotate />

Some of what we learned about two-plane intersections will come into play here. Let's start by taking the line of intersection for $P_2$ and $P_3$ and varying the position of $P_1$. You'll notice that the point of intersection is the point at which $P_1$ intersects the line.

<Scene scene="three-intersecting-planes" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

When $P_1$'s distance from the origin is 0, the vector pointing from the origin to the point of intersection is parallel to $P_1$ (and perpendicular to $P_1$'s normal).

<Scene scene="three-intersecting-planes-10" height={450} zoom={1.25} yOffset={-0.5} xRotation={45} autoRotate />

This vector—let's call it $\vec{V}$—will play a large role in computing the point of intersection.

We can find $\vec{V}$ through the cross product of two other vectors $\vec{v_1}$, $\vec{v_2}$. The first of those, $\vec{v_1}$, is just $P_1$'s normal.

<p className="mathblock">$$\vec{v_1} = \vec{n_1}$$</p>

The latter vector can be found via the equation

<p className="mathblock">$$\vec{v_2} = \vec{n_2} \times d_3 - \vec{n_3} \times d_2$$</p>

where $d_2$ and $d_3$ are the distances in the constant-normal form of planes $P_2$ and $P_3$.

With $\vec{v_1}$ and $\vec{v_2}$ defined, we assign their cross product to $\vec{V}$:

<p className="mathblock">$$ \vec{V} = \vec{v_1} × \vec{v_2} $$</p>

Let's see what it looks like:

<Scene scene="three-intersecting-planes-3" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

Hmm, not quite long enough. $\vec{V}$ certainly points in the right direction, but to make $\vec{V}$'s tip lie on the line of intersection, we need to compute some scaling factor for $\vec{V}$.

As it turns out, we've already computed this scaling factor:

<p className="mathblock">$$\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$$</p>

The product of $\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$—let's call that $D$—can be thought to represent how parallel $\vec{P_1}$'s normal is to the line intersection of $P_2$ and $P_3$.

$D$ approaches $\|\vec{n_2} × \vec{n_3}\|$ as $P_1$'s normal becomes parallel to the line of intersection $\vec{n_2} × \vec{n_3}$, and approaches 0 as they become perpendicular.

We want the $\vec{V}$'s magnitude to increase as $D$ decreases, so we'll make $\dfrac{1}{D}$ the scaling factor for $\vec{V}$.

<p className="mathblock">$$\vec{V} = \dfrac{\vec{v_1} × \vec{v_2}}{D}$$</p>

<Scene scene="three-intersecting-planes-4" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

Fully expanded, the equation for $\vec{V}$ becomes:

<p className="mathblock">$$\vec{V} = \dfrac{\vec{v_1} × \vec{v_2}}{D} = \dfrac{\vec{n_1} × ((\vec{n_2} \times d_3) - (\vec{n_3} \times d_2))}{\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})}$$</p>

Bam! The problem is now reduced to traveling along the direction of the line intersection until we intersect with $P_1$.

<Scene scene="three-intersecting-planes-5" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

We could use our knowledge of line-plane intersections to solve this, but there is a more efficient approach I want to demonstrate.

It involves finding a scaling factor for the direction vector $\vec{n_2} × \vec{n_3}$ that scales it such that it's tip ends at $P_1$. Let's call this direction vector $\vec{U}$.

There's one observation we can make that simplifies that. Since $\vec{V}$ is perpendicular to $P_1$'s normal, the distance from $\vec{V}$'s tip to $P_1$ along the direction vector $\vec{U}$ is the same as the distance from the origin to $P_1$ along that same direction.

<Scene scene="three-intersecting-planes-6" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

With that, consider the vector $\vec{n_1} \times d_1$ where $\vec{n_1}$ and $d_1$ are the normal and distance of $P_1$.

<Scene scene="three-intersecting-planes-7" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

If $\vec{n_1}$ were parallel to $\vec{U}$, then $d_1$ would be the scaling factor we need, but let's see what happens with $\vec{U} \times d_1$:

<Scene scene="three-intersecting-planes-8" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

As $\vec{n_1}$ and $\vec{U}$ become less parallel, $U \times d_1$ becomes increasingly too short.

One thing to note as well is that even when $\vec{n_1}$ and $\vec{U}$ are completely parallel, $\vec{U} \times d_1$ is still too short, which is due to $\vec{U}$ not being a unit vector. If we normalize $\vec{U}$ prior to multiplying with $d_1$ that problem goes away.

<Scene scene="three-intersecting-planes-11" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

But we're getting ahead of ourselves—we won't need to normalize $\vec{U}$. Let's take a fresh look at how $D$ is defined:

<p className="mathblock">$$D = \vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$$</p>

Having defined $\vec{U}$ as $\vec{n_2} × \vec{n_3}$, we can simplify this to

<p className="mathblock">$$D = \vec{n_1} \cdot \vec{U}$$</p>

Earlier I mentioned that we could think of $D$ as a measure of how parallel $P_1$'s normal $n_1$ is to $\vec{U}$ (the line intersection of $P_2$ and $P_3$). That's correct, but it's not the whole truth!

Since the dot product is a multiple of the magnitudes of its component vectors, $D$ also encodes the magnitude of $\vec{U}$. Hence, scaling $\vec{U}$ by $\dfrac{1}{D}$ does two things:

 1. it normalizes $\vec{U}$, and
 2. it increases the length of $\vec{U}$ as it becomes less parallel with $n_1$.

So $\dfrac{1}{D}$ is both the scaling factor we need for $\vec{U} \times d_1$, as well as $\vec{V}$:

<Scene scene="three-intersecting-planes-9" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

We've got our solution! Let's do a quick overview.

We define $\vec{V}$ as:

<p className="mathblock">$$\vec{V} = \vec{n_1} × ((\vec{n_2} \times d_3) - (\vec{n_3} \times d_2))$$</p>

We'll redefine $\vec{U}$ to include $d_1$:

<p className="mathblock">$$\vec{U} = (\vec{n_2} × \vec{n_3}) \times d_1$$</p>

Numitorul, $D$, ramane definit astfel :

<p className="mathblock">$$D = \vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$$</p>
gasim punctul de intersectia  $P$ prin a aduaga $\vec{V}$ si $\vec{U}$ impreuna si inmultind lungimea lor cu $\dfrac{1}{D}$:

<p className="mathblock">$$P = \dfrac{\vec{V} + \vec{U}}{D}$$</p>

Care cand extindem devine:

<p className="mathblock">$$P = \dfrac{(\vec{n_1} × ((\vec{n_2} \times d_3) - (\vec{n_3} \times d_2))) + ((\vec{n_2} × \vec{n_3}) \cdot d_1)}{\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})}$$</p>

Traducand aceasta in cod, am avea:

```cs
Vector3 ThreePlaneIntersection(Plane P1, Plane P2, Plane P3) {
  Vector3 dir = Vector3.Cross(P2.normal, P3.normal);
  
  float denom = Vector3.Dot(u);
  if (Mathf.Abs(denom) < EPSILON) {
    return null; // Planele nu se intersecteaza in niciun punct
  }

  Vector3 a = P2.normal * P3.distance;
  Vector3 b = P3.normal * P2.distance;
  Vector3 V = Vector3.Cross(P1.normal, a - b);
  Vector3 U = dir * P1.distance;

  return (V + U) / denom;
}
```
