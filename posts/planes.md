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

Verificarea $\vec{n_l} \cdot \vec{n_p} < \epsilon$ acoperă atât cazul "linie paralelă cu planul", cât și cazul în care cei doi vectori normali sunt la un unghi obtuz.

<SmallNote>$\epsilon$ este simbolul pentru epsilon.</SmallNote>



## Intersecția planurilor

Intersecția a două planuri formează o linie infinită.

<Scene scene="intersecting-planes" height={500} yOffset={0.5} zoom={1.4} usesVariables />

Ca o reîmprospătare rapidă: liniile în spațiul 3D sunt reprezentate folosind un punct $p$ și o normală $\vec{n}$, unde normală $\vec{n}$ descrie orientarea liniei, iar punctul $p$ descrie un punct prin care linia trece.

<Scene scene="line" height={380} zoom={1.6} yOffset={-0.6} usesVariables />

Să luăm două planuri $P_1$ și $P_2$, ale căror normale sunt $\vec{n_1}$ și $\vec{n_2}$.

Găsirea vectorului direcției intersecției dintre planurile $P_1$ și $P_2$ este deceptiv de simplă. Deoarece linia de intersecție a două planuri se află pe suprafața ambelor planuri, linia trebuie să fie perpendiculară pe ambele normale ale planurilor, ceea ce înseamnă că direcția intersecției este produsul vectorial al celor două normale ale planurilor. O vom atribui lui $\vec{d}$.

<p className="mathblock">$$\vec{d} = \vec{n_1} × \vec{n_2}$$</p>

Magnitudinea produsului vectorial este egală cu [aria paralelogramului][area_parallelogram] format de cei doi vectori componenti. Asta înseamnă că nu putem aștepta ca produsul vectorial să fie un vector unitar, așa că vom normaliza $\vec{d}$ și vom atribui vectorul de direcție normalizat lui $\vec{n}$.

[area_parallelogram]: https://en.wikipedia.org/wiki/Cross_product#/media/File:Cross_product_parallelogram.svg

<p className="mathblock">$$\vec{n} = \dfrac{\vec{d}}{\|\vec{d}\|}$$</p>

Aceasta ne oferă normală intersecției $\vec{n}$. Haideți să facem un zoom și să vedem acest lucru de aproape.

<Scene scene="intersecting-planes-point-and-normal" height={380} zoom={2} usesVariables />

Dar aceasta este doar jumătate din puzzle! Va trebui, de asemenea, să găsim un punct în spațiu pentru a reprezenta linia de intersecție (adică un punct prin care linia trece). Vom analiza cum să facem acest lucru, imediat după ce discutăm despre cazul fără intersecție.


### Gestionarea planurilor paralele

Două planuri ale căror normale sunt paralele nu se vor intersecta niciodată, ceea ce este un caz pe care va trebui să-l gestionăm.

<Scene scene="parallel-planes" height={480} zoom={1.3} yOffset={-0.5} autoRotate />


Produsul vectorial al două normale paralele este $(0, 0, 0)$. Așadar, dacă $|\vec{n_1} × \vec{n_2}| = 0$, planurile nu se intersectează.

După cum am menționat anterior, pentru multe aplicații vom dori să tratăm planurile care sunt aproape paralele ca fiind paralele. Aceasta înseamnă că procedura noastră de intersecție a planurilor ar trebui să returneze un rezultat de "fără intersecție" atunci când magnitudinea lui $\vec{d}$ este mai mică decât o valoare foarte mică numită epsilon.

```cs
Line PlanePlaneIntersection(Plane P1, Plane P2) {
  Vector3 direction = Vector3.cross(P1.normal, P2.normal);
  if (direction.magnitude < EPSILON) {
    return null; // Planuri aproximativ paralele
  }
  // ...
}
```
Dar care ar trebui să fie valoarea lui epsilon?

Având două normale $\vec{n_1}$ și $\vec{n_2}$, unde unghiul dintre $\vec{n_1}$ și $\vec{n_2}$ este $\theta°$, putem găsi un epsilon rezonabil prin trasarea valorii $|\vec{n_1} \times \vec{n_2}|$ pentru diferite valori ale unghiului $\theta°$:

<Image src="~/cross-product-magnitude-by-angle.png" plain width={840} />

<SmallNote label="" center>Ambele axe sunt [logaritmice][log_chart].</SmallNote>

[log_chart]: https://en.wikipedia.org/wiki/Logarithmic_scale


Relația este lineară: pe măsură ce unghiul dintre planuri se împarte la jumătate, la fel se reduce și magnitudinea produsului vectorial al normalelor lor. $\theta° = 1$ generează o magnitudine de $0.01745$, iar $\theta° = 0.5$ generează jumătate din aceasta.

Așadar, pentru a determina epsilon, ne putem întreba: cât de mic trebuie să devină unghiul în grade pentru a considera două planuri paralele? Având un unghi $\theta°$, putem găsi epsilon $\epsilon$ prin:

<p className="mathblock">$$\epsilon = 0.01745 \times \theta°$$</p>

Dacă unghiul este de 1/256°, atunci obținem:

<p className="mathblock">$$\dfrac{0.01745}{256} \approx 0.000068 $$</p>

Cu aceasta, poți determina epsilon-ul corespunzător pe baza cât de mic trebuie să fie unghiul dintre planuri pentru a le considera paralele. Acest lucru va depinde de cazul tău de utilizare.

### Găsirea unui punct de intersecție

După ce am calculat normală și am gestionat planurile paralele, putem trece la găsirea unui punct $p$ de-a lungul liniei de intersecție.

Deoarece linia care descrie intersecția a două planuri este infinită, există infinit de multe puncte pe care le-am putea alege ca $p$.

<Scene scene="intersecting-planes-points" height={400} zoom={1.3} yOffset={0.5} usesVariables />

Putem restrânge problema luând planul paralel cu cele două normale ale planurilor $\vec{n_1}$ și $\vec{n_2}$ și observând că acesta intersectează linia într-un singur punct.

<Scene scene="intersecting-planes-virtual-plane" height={470} zoom={1.3} yOffset={-1} usesVariables />

Deoarece punctul se află pe planul paralel cu cele două normale ale planurilor, îl putem găsi călătorind exclusiv de-a lungul acelor normale.

Cazul cel mai simplu este cel în care $P_1$ și $P_2$ sunt perpendiculare. În acest caz, soluția este pur și simplu $n_1 \times d_1 + n_2 \times d_2$. Iată cum arată acest lucru vizual:

<Scene scene="intersecting-planes-offset-2" height={470} yOffset={-0.5} usesVariables />

Când mutați sliderul, observați cum vârful paralelogramului se îndepărtează de punctul de intersecție pe măsură ce planurile devin mai paralele.

De asemenea, putem observa că pe măsură ce ne îndepărtăm de punctul de intersecție, vectorul mai lung (colorat în roșu) ne împinge mai departe de punctul de intersecție decât o face vectorul mai scurt (albastru). Acest lucru este mai ușor de observat dacă tragem o linie de la origine până la punctul de intersecție.

<Scene scene="intersecting-planes-offset-4" height={470} yOffset={-0.5} usesVariables />

Să definim $k_1$ și $k_2$ ca factori de scalare pe care îi aplicăm vectorilor $\vec{n_1}$ și $\vec{n_2}$ (rezultatul căror sunt vectorii roșii și albaștri). În acest moment, folosim componentele de distanță $d_1$ și $d_2$ ale planurilor ca factori de scalare:

<p className="mathblock">$$ k_1 = d_1 $$<br />$$ k_2 = d_2 $$</p>

Pentru a rezolva acest efect de împingere asimetrică, trebuie să călătorim mai puțin în direcția vectorului mai lung pe măsură ce planurile devin mai paralele. Avem nevoie de un fel de "factor de atracție" care să ajusteze vectorii astfel încât vârful lor să rămână pe linie pe măsură ce planurile devin paralele.

Aici, produsul scalar ne vine din nou în ajutor. Când planurile sunt perpendiculare, produsul scalar dintre $\vec{n_1}$ și $\vec{n_2}$ este 0, dar pe măsură ce planurile devin tot mai paralele, acesta se apropie de 1. Putem folosi acest lucru pentru a crește treptat factorul nostru de atracție, care urmează să fie definit.

<p className="mathblock">$$ k_1 = d_1 + pull_1 \times (\vec{n_1} \cdot \vec{n_2}) $$<br />$$ k_2 = d_2 + pull_2 \times (\vec{n_1} \cdot \vec{n_2}) $$</p>

Să atribuim produsului scalar $\vec{n_1} \cdot \vec{n_2}$ numele de $dot$ pentru a face această formulă mai puțin încărcată:

<p className="mathblock">$$ k_1 = d_1 + pull_1 \times dot $$<br />$$ k_2 = d_2 + pull_2 \times dot $$</p>

Factorii de atracție perfecți se dovedesc a fi componentele de distanță $d_1$ și $d_2$, utilizate ca contragreutăți unul împotriva celuilalt!

<p className="mathblock">$$ k_1 = d_1 - d_2 \times dot $$<br />$$ k_2 = d_2 - d_1 \times dot $$</p>

Gândiți-vă de ce acest lucru ar putea fi adevărat. Când $\vec{n_1}$ și $\vec{n_2}$ sunt perpendiculare, produsul lor scalar este 0, ceea ce duce la:

<p className="mathblock">$$ k_1 = d_1 $$<br />$$ k_2 = d_2 $$</p>

Știm că aceasta duce la soluția corectă.

În cazul în care $\vec{n_1}$ și $\vec{n_2}$ sunt paralele, produsul lor scalar este 1, ceea ce duce la:

<p className="mathblock">$$ k_1 = d_1 - d_2 $$<br />$$ k_2 = d_2 - d_1 $$</p>


Pentru că valorile absolute ale lui $d_1 - d_2$ și $d_2 - d_1$ sunt egale, aceasta înseamnă că magnitudinea celor doi vectori — definiți ca $\vec{n_1} \times k_1$ și $\vec{n_2} \times k_2$ — este egală:

<p className="mathblock">$$ \|\vec{n_1} \times k_1\| = \|\vec{n_2} \times k_2\| $$</p>

Aceasta înseamnă că magnitudinea vectorilor noștri va deveni mai egală pe măsură ce planurile devin paralele, ceea ce este exact ceea ce ne dorim!

Haideți să vedem acest lucru în acțiune:

<Scene scene="intersecting-planes-offset-3" height={470} yOffset={-0.5} usesVariables />

Vectorii rămân pe linie, dar devin din ce în ce mai scurți pe măsură ce $\vec{n_1}$ și $\vec{n_2}$ devin paralele.

Din nou, putem folosi produsul scalar. Deoarece dorim ca lungimea vectorilor să crească pe măsură ce planurile devin paralele, putem împărți scalarii $k_1$ și $k_2$ la $1 - \text{abs}(dot)$, unde $dot$ este produsul scalar dintre $\vec{n_1}$ și $\vec{n_2}$, iar $\text{abs}(dot)$ este valoarea absolută a lui $dot$.

<p className="mathblock">$$ k_1 = (d_1 - d_2 \times dot) \,/\, (1 - abs(dot)) $$<br />$$ k_2 = (d_2 - d_1 \times dot) \,/\, (1 - abs(dot)) $$</p>

Rezultatul acestui lucru arată astfel:

<Scene scene="intersecting-planes-offset-5" height={440} usesVariables />

Folosirea lui $1 - \text{abs}(dot)$ ca numitor mărește cu siguranță dimensiunea paralelogramului, dar prea mult.

Totuși, observați ce se întâmplă când vizualizăm cadranele paralelogramului:

<Scene scene="intersecting-planes-offset-7" height={440} angle={25} usesVariables />

Pe măsură ce planurile devin mai paralele, punctul de intersecție se apropie de centrul paralelogramului.

Pentru a înțelege de ce se întâmplă acest lucru, să analizăm efectul pe care îl are numitorul nostru $1 - \text{abs}(dot)$ asupra ariei paralelogramului. Când $1 - \text{abs}(dot) = 0.5$, ambele dintre vectorii care formează paralelogramul își dublează lungimea, ceea ce are efectul de a înmulți aria paralelogramului cu patru.

<Image src="~/area-of-parallelogram.svg" plain width={600} />

Aceasta înseamnă că atunci când scalăm vectorii componenti ai paralelogramului cu

<p className="mathblock">$$ \dfrac{1}{1 - abs(dot)} $$</p>

Acest lucru are efectul de a scala aria paralelogramului cu:

<p className="mathblock">$$ (\dfrac{1}{1 - abs(dot)})^2 $$</p>

Pentru a scala în schimb aria paralelogramului cu $1 ,/, (1 - \text{abs}(dot))$, trebuie să ridicăm la pătrat valoarea lui $dot$ în numitor:

<p className="mathblock">$$ \dfrac{1}{1 - dot^2} $$</p>

<SmallNote label="" center>Ridicarea la pătrat ne permite să eliminăm $abs()$ deoarece pătratul unui număr negativ este pozitiv.</SmallNote>

Cu aceasta, scalarii noștri $k_1$ și $k_2$ devin:

<p className="mathblock">$$ k_1 = (d_1 - d_2 \times dot) \,/\, (1 - dot^2) $$<br />$$ k_2 = (d_2 - d_1 \times dot) \,/\, (1 - dot^2) $$</p>

Aceasta scalează paralelogramul astfel încât vârful său să se afle exact la punctul de intersecție:

<Scene scene="intersecting-planes-offset-6" height={400} yOffset={-1} usesVariables />

Punând toate acestea în cod, obținem:

```cs
float dot = Vector3.Dot(P1.normal, P2.normal);
float denom = 1 - dot * dot;

float k1 = (P1.distance - P2.distance * dot) / denom;
float k2 = (P2.distance - P1.distance * dot) / denom;

Vector3 point = P1.normal * k1 + P2.normal * k2;
```

<SmallNote label="" center>Pe baza codului din [Real-Time Collision Detection by Christer Ericson][further_reading]</SmallNote>

Care, printr-o magie matematică, poate fi optimizat la:

```cs
Vector3 direction = Vector3.cross(P1.normal, P2.normal);

float denom = Vector3.Dot(direction, direction);
Vector3 a = P1.distance * P2.normal;
Vector3 b = P2.distance * P1.normal;
Vector3 point = Vector3.Cross(a - b, direction) / denom;
```

<SmallNote label="" center>Cum funcționează această optimizare poate fi găsit în capitolul 5.4.4 din [Real-Time Collision Detection by Christer Ericson][further_reading].</SmallNote>

Aceasta completează implementarea noastră de intersecție plan-plan:

```cs
Line PlanePlaneIntersection(Plane P1, Plane P2) {
  Vector3 direction = Vector3.cross(P1.normal, P2.normal);
  if (direction.magnitude < EPSILON) {
    return null; //Planuri aproximativ paralele
  }

  float denom = Vector3.Dot(direction, direction);
  Vector3 a = P1.distance * P2.normal;
  Vector3 b = P2.distance * P1.normal;
  Vector3 point = Vector3.Cross(a - b, direction) / denom;

  Vector3 normal = direction.normalized;

  return new Line(point, normal);
}
```

Apropo, o proprietate interesantă a călătoriei doar pe normalele planului este că aceasta duce la punctul de pe linia de intersecție care este cel mai apropiat de origine. Foarte tare!


## Intersecția a trei planuri

Având trei planuri $P_1$, $P_2$, $P_3$, există cinci configurații posibile în care acestea pot interseca sau nu:

1. Toate cele trei planuri sunt paralele, fără ca vreunul dintre ele să intersecționeze celelalte.
2. Două dintre planuri sunt paralele, iar al treilea plan intersectează cele două planuri paralele.
3. Toate cele trei planuri se intersectează pe o singură linie.
4. Cele trei planuri se intersectează fiecare în pereche, formând trei linii paralele de intersecție.
5. Toate cele trei planuri se intersectează între ele într-un singur punct.

<Scene scene="three-plane-intersection-configurations" height={400} yOffset={-1} zoom={1.1} usesVariables />

Când căutăm punctul de intersecție, va trebui mai întâi să determinăm dacă toate cele trei planuri se intersectează într-un singur punct—ceea ce pentru configurațiile 1 până la 4 nu se întâmplă.

Având $\vec{n_1}$, $\vec{n_2}$, $\vec{n_3}$ ca normalele planurilor pentru $P_1$, $P_2$, $P_3$, putem determina dacă planurile se intersectează într-un singur punct folosind formula:

<p className="mathblock">$$ \vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) \neq 0 $$</p>

Când am văzut asta pentru prima dată, mi s-a părut greu de crezut că va funcționa în toate cazurile. Totuși, funcționează! Haideți să analizăm în detaliu pentru a înțelege mai bine ce se întâmplă.

### Două sau mai multe plane sunt paralele

Vom începe cu configurațiile în care două sau mai multe plane sunt paralele:

<Scene scene="three-planes-some-parallel" height={400} autoRotate />

Dacă $\vec{n_2}$ și $\vec{n_3}$ sunt paralele, atunci $\vec{n_2} \times \vec{n_3}$ este un vector a cărui magnitudine este zero.

<p className="mathblock">$$\|\vec{n_2} × \vec{n_3}\| = 0$$</p>

Și deoarece produsul scalar este un multiplu al magnitudinilor vectorilor săi componenti:

<p className="mathblock">$$a \cdot b = \|a\|\,\|b\|\,\cos\theta$$</p>

Rezultatul final este zero ori de câte ori $\vec{n_2}$ și $\vec{n_3}$ sunt paralele.

<p className="mathblock">$$\vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) = 0$$</p>

Aceasta se ocupă de configurația "toate planele paralele" și de configurația în care $\vec{n_2}$ și $\vec{n_3}$ sunt paralele.

<Scene scene="three-planes-n2-n3-parallel" height={440} zoom={1.4} xRotation={-20} autoRotate />

Cu aceasta, să considerăm cazul în care $\vec{n_1}$ este paralel cu fie $\vec{n_2}$, fie $\vec{n_3}$, dar $\vec{n_2}$ și $\vec{n_3}$ nu sunt paralele între ele.

Să luăm cazul specific în care $\vec{n_1}$ este paralel cu $\vec{n_2}$, dar $\vec{n_3}$ nu este paralel cu niciunul dintre ele.

<Scene scene="three-planes-n1-n2-parallel" height={440} zoom={1.4} xRotation={-20} autoRotate />

Aici, produsul vectorial $\vec{n_2} \times \vec{n_3}$ este un vector (colorat în roșu) care este perpendicular pe ambele $\vec{n_2}$ și $\vec{n_3}$.

<Scene scene="three-planes-n1-n2-parallel-cross" height={440} zoom={1.4} xRotation={-20} autoRotate />

Cum $\vec{n_1}$ este paralel cu $\vec{n_2}$, acest lucru înseamnă că $\vec{n_2} \times \vec{n_3}$ este de asemenea perpendicular pe $\vec{n_1}$. Așa cum am învățat, produsul scalar al două vectori perpendiculare este zero, ceea ce înseamnă că:

<p className="mathblock">$$\vec{n_1} \cdot (\vec{n_2} × \vec{n_3}) = 0$$</p>

Acest lucru este valabil și în cazul în care $\vec{n_1}$ este paralel cu $\vec{n_3}$ în loc de $\vec{n_2}$.

### Linii de intersecție paralele

Am demonstrat că două dintre cele trei normale paralele duc la $\vec{n_1} \cdot (\vec{n_2} \times \vec{n_3}) = 0$. Dar ce se întâmplă în configurațiile în care cele trei plane se intersectează de-a lungul unor linii paralele? Aceste configurații nu au normale paralele.

<Scene scene="three-planes-three-lines" height={430} zoom={1.2} yOffset={0.5} autoRotate />

Așa cum am învățat atunci când am analizat intersecțiile plane-plane, produsul vectorial al două normale de plane ne oferă vectorul direcției liniei de intersecție a planelelor.

<Scene scene="three-planes-three-lines-cross" height={460} zoom={1.4} autoRotate />

Atunci când toate liniile de intersecție sunt paralele, toate normalele planelelor care definesc aceste linii sunt perpendiculare pe ele.

Din nou, deoarece produsul scalar al vectorilor perpendiculare este 0, putem concluziona că $\vec{n_1} \cdot (\vec{n_2} \times \vec{n_3}) = 0$ și pentru aceste configurații.

Acum putem începe implementarea. Ca de obicei, vom folosi un epsilon pentru a gestiona cazul "aproape paralel":

```cs
Vector3 ThreePlaneIntersection(Plane P1, Plane P2, Plane P3) {
  Vector3 cross = Vector3.Cross(P2.normal, P3.normal);
  float dot = Vector3.Dot(P1.normal, cross);
  if (Mathf.Abs(dot) < EPSILON) {
    return null; // Planele nu se intersectează într-un singur punct.
  }
  // ...
}
```

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

Our denominator, $D$, remains defined as :

<p className="mathblock">$$D = \vec{n_1} \cdot (\vec{n_2} × \vec{n_3})$$</p>

With this, we find our point of intersection $P$ by adding $\vec{V}$ and $\vec{U}$ together and scaling them by $\dfrac{1}{D}$:

<p className="mathblock">$$P = \dfrac{\vec{V} + \vec{U}}{D}$$</p>

Which fully expanded becomes:

<p className="mathblock">$$P = \dfrac{(\vec{n_1} × ((\vec{n_2} \times d_3) - (\vec{n_3} \times d_2))) + ((\vec{n_2} × \vec{n_3}) \cdot d_1)}{\vec{n_1} \cdot (\vec{n_2} × \vec{n_3})}$$</p>

Putting this into code, we get:

```cs
Vector3 ThreePlaneIntersection(Plane P1, Plane P2, Plane P3) {
  Vector3 dir = Vector3.Cross(P2.normal, P3.normal);
  
  float denom = Vector3.Dot(u);
  if (Mathf.Abs(denom) < EPSILON) {
    return null; // Planes do not intersect at a single point
  }

  Vector3 a = P2.normal * P3.distance;
  Vector3 b = P3.normal * P2.distance;
  Vector3 V = Vector3.Cross(P1.normal, a - b);
  Vector3 U = dir * P1.distance;

  return (V + U) / denom;
}
```