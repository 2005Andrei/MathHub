---
title: "Planele în spațiul 3D"
description: "Introducere vizuală și interactivă în planurile 2D din spațiul 3D."
image: "/images/og-planes.png"
publishedAt: "2024-11-19"
tags: ["Algebra geometrica", "Interactiv", "Vectori"]
---

Un plan in 3D poate fi vazut ca o suprafata infinita, impartind spatiul in dou jumatati.

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



## Calcularea punctului de intersecție.

Dorim să găsim punctul în care cele trei plane $P_1$, $P_2$, $P_3$ se intersectează:

<Scene scene="three-intersecting-planes-point" height={520} zoom={1.25} yOffset={-1} xRotation={-17} autoRotate />

Unele dintre lucrurile pe care le-am învățat despre intersecțiile a două plane vor fi aplicate și aici. Să începem prin a lua linia de intersecție pentru $P_2$ și $P_3$ și să variem poziția lui $P_1$. Veți observa că punctul de intersecție este punctul în care $P_1$ intersectează linia.

<Scene scene="three-intersecting-planes" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

Când distanța lui $P_1$ față de origine este 0, vectorul care indică de la origine către punctul de intersecție este paralel cu $P_1$ (și perpendicular pe normalul lui $P_1$).

<Scene scene="three-intersecting-planes-10" height={450} zoom={1.25} yOffset={-0.5} xRotation={45} autoRotate />

Acest vector—să-l numim $\vec{V}$—va juca un rol important în calcularea punctului de intersecție.

Putem găsi $\vec{V}$ prin produsul vectorial al altor două vectori, $\vec{v_1}$ și $\vec{v_2}$. Primul dintre aceștia, $\vec{v_1}$, este chiar normalul lui $P_1$.

<p className="mathblock">$$\vec{v_1} = \vec{n_1}$$</p>

Cel de-al doilea vector poate fi găsit prin ecuația:

<p className="mathblock">$$\vec{v_2} = \vec{n_2} \times d_3 - \vec{n_3} \times d_2$$</p>

unde $d_2$ și $d_3$ sunt distanțele în forma constantă-normală ale planelelor $P_2$ și $P_3$.

Cu $\vec{v_1}$ și $\vec{v_2}$ definite, atribuim produsul lor încrucișat lui $\vec{V}$:

<p className="mathblock">$$ \vec{V} = \vec{v_1} × \vec{v_2} $$</p>

Hai să vedem cum arată:

<Scene scene="three-intersecting-planes-3" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

Hmm, nu este suficient de lung. $\vec{V}$ indică cu siguranță direcția corectă, dar pentru a face vârful lui $\vec{V}$ să se afle pe linia de intersecție, trebuie să calculăm un factor de scalare pentru $\vec{V}$.

După cum se dovedește, am calculat deja acest factor de scalare:

<p className="mathblock">$$\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$$</p>

Produsul $\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$—să-l numim $D$—poate fi considerat ca reprezentând cât de paralel este normalul lui $\vec{P_1}$ față de linia de intersecție a lui $P_2$ și $P_3$.

$D$ se apropie de $|\vec{n_2} × \vec{n_3}|$ pe măsură ce normalul lui $P_1$ devine paralel cu linia de intersecție $\vec{n_2} × \vec{n_3}$ și se apropie de 0 pe măsură ce devin perpendiculare.

Dorim ca magnitudinea lui $\vec{V}$ să crească pe măsură ce $D$ scade, așa că vom face $\dfrac{1}{D}$ factorul de scalare pentru $\vec{V}$.

<p className="mathblock">$$\vec{V} = \dfrac{\vec{v_1} × \vec{v_2}}{D}$$</p>

<Scene scene="three-intersecting-planes-4" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

Complet extins, ecuația pentru $\vec{V}$ devine:

<p className="mathblock">$$\vec{V} = \dfrac{\vec{v_1} × \vec{v_2}}{D} = \dfrac{\vec{n_1} × ((\vec{n_2} \times d_3) - (\vec{n_3} \times d_2))}{\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})}$$</p>

Bam! Problema este acum redusă la a călători de-a lungul direcției liniei de intersecție până când intersectăm cu $P_1$.

<Scene scene="three-intersecting-planes-5" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

Am putea folosi cunoștințele noastre despre intersecțiile linie-plan pentru a rezolva asta, dar există o abordare mai eficientă pe care vreau să o demonstrez.

Este vorba despre găsirea unui factor de scalare pentru vectorul de direcție $\vec{n_2} × \vec{n_3}$ care să-l scaleze astfel încât vârful său să ajungă la $P_1$. Să numim acest vector de direcție $\vec{U}$.

Există o observație pe care o putem face și care simplifică acest lucru. Deoarece $\vec{V}$ este perpendicular pe normalul lui $P_1$, distanța de la vârful lui $\vec{V}$ la $P_1$ pe direcția vectorului $\vec{U}$ este aceeași cu distanța de la origine la $P_1$ pe aceeași direcție.

<Scene scene="three-intersecting-planes-6" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

În acest context, să considerăm vectorul $\vec{n_1} \times d_1$, unde $\vec{n_1}$ și $d_1$ sunt normalul și distanța lui $P_1$.

<Scene scene="three-intersecting-planes-7" height={450} zoom={1.25} yOffset={-0.5} autoRotate />

Dacă $\vec{n_1}$ ar fi paralel cu $\vec{U}$, atunci $d_1$ ar fi factorul de scalare de care avem nevoie, dar să vedem ce se întâmplă cu $\vec{U} \times d_1$:

<Scene scene="three-intersecting-planes-8" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

Pe măsură ce $\vec{n_1}$ și $\vec{U}$ devin din ce în ce mai puțin paralele, $\vec{U} \times d_1$ devine din ce în ce mai scurt.

Un lucru de menționat este că, chiar și atunci când $\vec{n_1}$ și $\vec{U}$ sunt complet paralele, $\vec{U} \times d_1$ este tot prea scurt, iar acest lucru se datorează faptului că $\vec{U}$ nu este un vector unitate. Dacă normalizăm $\vec{U}$ înainte de a-l înmulți cu $d_1$, problema dispare.

<Scene scene="three-intersecting-planes-11" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

Dar ne grăbim puțin — nu va trebui să normalizăm $\vec{U}$. Haideți să privim din nou cum este definit $D$:

<p className="mathblock">$$D = \vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$$</p>

Având definit $\vec{U}$ ca fiind $\vec{n_2} × \vec{n_3}$, putem simplifica aceasta la

<p className="mathblock">$$D = \vec{n_1} \cdot \vec{U}$$</p>

Mai devreme am menționat că am putea considera $D$ ca o măsură a cât de paralel este normalul lui $P_1$, $\vec{n_1}$, cu $\vec{U}$ (linia de intersecție a lui $P_2$ și $P_3$). Asta este corect, dar nu este întreaga poveste!

Deoarece produsul scalar este un multiplu al magnitudinilor vectorilor săi componenti, $D$ înregistrează și magnitudinea lui $\vec{U}$. Astfel, scalarea lui $\vec{U}$ cu $\dfrac{1}{D}$ face două lucruri:

1. Normalizează $\vec{U}$, și
2. Crește lungimea lui $\vec{U}$ pe măsură ce devine mai puțin paralel cu $\vec{n_1}$.

Așadar, $\dfrac{1}{D}$ este atât factorul de scalare de care avem nevoie pentru $\vec{U} \times d_1$, cât și pentru $\vec{V}$:

<Scene scene="three-intersecting-planes-9" height={450} zoom={1.25} yOffset={-0.5} xRotation={-17} usesVariables />

Am obținut soluția! Să facem o revizuire rapidă.

Definim $\vec{V}$ ca:

<p className="mathblock">$$\vec{V} = \vec{n_1} × ((\vec{n_2} \times d_3) - (\vec{n_3} \times d_2))$$</p>

Vom redefini $\vec{U}$ pentru a include și $d_1$:

<p className="mathblock">$$\vec{U} = (\vec{n_2} × \vec{n_3}) \times d_1$$</p>

Desigur! Așadar, numitorul nostru, $D$, rămâne definit ca:

<p className="mathblock">$$D = \vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$$</p>

Cu aceasta, găsim punctul nostru de intersecție $P$ adunând $\vec{V}$ și $\vec{U}$ și scalându-le cu $\dfrac{1}{D}$:

<p className="mathblock">$$P = \dfrac{\vec{V} + \vec{U}}{D}$$</p>

Care, complet extins, devine:

<p className="mathblock">$$P = \dfrac{(\vec{n_1} × ((\vec{n_2} \times d_3) - (\vec{n_3} \times d_2))) + ((\vec{n_2} × \vec{n_3}) \cdot d_1)}{\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})}$$</p>

Punând aceasta în cod, obținem:

```cs
Vector3 ThreePlaneIntersection(Plane P1, Plane P2, Plane P3) {
  Vector3 dir = Vector3.Cross(P2.normal, P3.normal);
  
  float denom = Vector3.Dot(u);
  if (Mathf.Abs(denom) < EPSILON) {
    return null; // Planele nu se intersectează într-un singur punct.
  }

  Vector3 a = P2.normal * P3.distance;
  Vector3 b = P3.normal * P2.distance;
  Vector3 V = Vector3.Cross(P1.normal, a - b);
  Vector3 U = dir * P1.distance;

  return (V + U) / denom;
}
```