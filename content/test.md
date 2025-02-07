---
title: 🧠 Null-risk-test
---
  
  
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous"       onload="renderMathInElement(document.body);"></script>



<div id="utvelgelse">

Her kan du lage en `null-risko-test` ved å velge ut hvilke læringsmål du vil ha. Deretter kan du generere testen og få en tilfeldig oppgave fra hvert av læringsmålene du har valgt.


<button class="button173"  onclick="processCheckedCallouts()">Lag test</button>

 
> [!cite]- Tallteori <div class="progressstyle"> <div id="total_1" style="padding: 5px 0px 5px 0px"></div></div>
> <table class="lmtabell">        <tr id="1.1.">      <td>LM 1.1</td>      <td > <input type="checkbox" value="1.1 Mild"> Mild</td>      <td >  </td>      <td >  </td>      </tr>      <tr  id="1.2.">      <td> LM 1.2 </td>      <td >  </td>      <td ><input type="checkbox" value="1.2 Medium"> Medium </td>      <td > <input type="checkbox" value="1.2 Spicy"> Spicy </td>      </tr>      <tr  id="1.3." >      <td> LM 1.3 </td>      <td><input type="checkbox" value="1.3 Mild"> Mild  </td>    <td > <input type="checkbox" value="1.3 Medium"> Medium </td><td> <input type="checkbox" value="1.3 Spicy"> Spicy</td>      </tr>            <tr  id="1.4.">      <td>LM 1.4</td>      <td > <input type="checkbox" value="1.4 Mild"> Mild</td>      <td > <input type="checkbox" value="1.4 Medium"> Medium</td>      <td > <input type="checkbox" value="1.4 Spicy"> Spicy</td>      </tr>      <tr  id="1.5.">      <td> LM 1.5</td>       <td><input type="checkbox" value="1.5 Mild"> Mild  </td>    <td > <input type="checkbox" value="1.5 Medium"> Medium  </td><td> <input type="checkbox" value="1.5 Spicy"> Spicy </td>    </tr>      <tr  id="1.6.">      <td>LM 1.6</td>      <td><input type="checkbox" value="1.6 Mild"> Mild  </td>    <td > <input type="checkbox" value="1.6 Medium"> Medium </td><td> <input type="checkbox" value="1.6 Spicy"> Spicy</td>      </tr>      <tr id="1.7.">      <td> LM 1.7 </td>       <td><input type="checkbox" value="1.7 Mild"> Mild  </td>    <td > <input type="checkbox" value="1.7 Medium"> Medium </td><td> </td>     </tr>   <tr  id="1.8.">      <td> LM 1.8 </td>      <td> <input type="checkbox" value="1.8 Mild"> Mild</td>      <td > <input type="checkbox" value="1.8 Medium"> Medium </td>      <td > <input type="checkbox" value="1.8 Spicy"> Spicy </td>      </tr>   <tr  id="1.9.">      <td> LM 1.9 </td>      <td>      </td>      <td > <input type="checkbox" value="1.9 Medium"> Medium </td>      <td > <input type="checkbox" value="1.9 Spicy"> Spicy </td>      </tr>   <tr  id="1.10.">      <td> LM 1.10 </td>       <td><input type="checkbox" value="1.10 Mild"> Mild  </td>    <td > <input type="checkbox" value="1.10 Medium"> Medium </td><td> <input type="checkbox" value="1.10 Spicy"> Spicy</td>      </tr>      </tr>   <tr  id="1.11.">      <td> LM 1.11 </td>       <td>  </td>    <td > <input type="checkbox" value="1.11 Medium"> Medium </td><td> <input type="checkbox" value="1.11 Spicy"> Spicy</td>      </tr> </table>

> [!cite]- Funksjoner <div class="progressstyle"> <div id="total_2" style="padding: 5px 0px 5px 0px"></div></div>
> <table class="lmtabell">        <tr id="2.1.">      <td>LM 2.1</td>      <td > </td>      <td > <input type="checkbox" value="2.1 Medium"> Medium </td>      <td >  </td>      </tr>  <tr id="2.2.">      <td>LM 2.2</td>      <td > </td>      <td >   </td>      <td >  <input type="checkbox" value="2.2 Spicy"> Spicy </td>      </tr>    <tr id="2.3.">      <td>LM 2.3</td>      <td ></td>      <td >  <input type="checkbox" value="2.3 Medium"> Medium  </td>      <td > </td>      </tr>  <tr id="2.4.">      <td>LM 2.4</td>      <td > </td>      <td >  <input type="checkbox" value="2.4 Medium"> Medium  </td>      <td > </td>      </tr>   <tr id="2.5.">      <td>LM 2.5</td>      <td > </td>      <td >  <input type="checkbox" value="2.5 Medium"> Medium  </td>      <td >  <input type="checkbox" value="2.5 Spicy"> Spicy </td>      </tr>   <tr id="2.6.">      <td>LM 2.6</td>      <td > <input type="checkbox" value="2.6 Mild"> Mild</td>      <td >  <input type="checkbox" value="2.6 Medium"> Medium  </td>      <td >   </td>      </tr>  <tr id="2.7.">      <td>LM 2.7</td>      <td > </td>      <td >  <input type="checkbox" value="2.7 Medium"> Medium  </td>      <td >   </td>      </tr>   <tr id="2.8.">      <td>LM 2.8</td>      <td > <input type="checkbox" value="2.8 Mild"> Mild</td>      <td >  <input type="checkbox" value="2.8 Medium"> Medium  </td>      <td >  <input type="checkbox" value="2.8 Spicy"> Spicy </td>      </tr>   </table>

> [!cite]- Likninger, ulikheter, algebraiske uttrykk og geometri <div class="progressstyle"> <div id="total_3" style="padding: 5px 0px 5px 0px"></div></div>
> <table class="lmtabell">     <tr id="3.1.">      <td>LM 3.1</td>      <td ><input type="checkbox" value="3.1 Mild"> Mild </td>      <td > <input type="checkbox" value="3.1 Medium"> Medium </td>      <td >  </td> </tr> <tr id="3.2.">      <td>LM 3.2</td>      <td ><input type="checkbox" value="3.2 Mild"> Mild </td>      <td > <input type="checkbox" value="3.2 Medium"> Medium </td>       <td >  </td> </tr><tr id="3.3.">      <td>LM 3.3</td>      <td ><input type="checkbox" value="3.3 Mild"> Mild </td>      <td > <input type="checkbox" value="3.3 Medium"> Medium </td>    <td >  </td> </tr> <tr id="3.4.">      <td>LM 3.4</td>      <td ></td>      <td > <input type="checkbox" value="3.4 Medium"> Medium </td>     <td >  <input type="checkbox" value="3.4 Spicy"> Spicy  </td> </tr><tr id="3.5.">      <td>LM 3.5</td>      <td ><input type="checkbox" value="3.5 Mild"> Mild </td>      <td > <input type="checkbox" value="3.5 Medium"> Medium </td>      <td >  </td> </tr><tr id="3.6.">      <td>LM 3.6</td>      <td ><input type="checkbox" value="3.6 Mild"> Mild </td>      <td > <input type="checkbox" value="3.6 Medium"> Medium </td>       <td ><input type="checkbox" value="3.6 Spicy"> Spicy  </td> </tr><tr id="3.7.">      <td>LM 3.7</td>      <td > </td>      <td > <input type="checkbox" value="3.7 Medium"> Medium </td>      <td >  </td> </tr><tr id="3.8.">      <td>LM 3.8</td>      <td ><input type="checkbox" value="3.8 Mild"> Mild </td>      <td > <input type="checkbox" value="3.8 Medium"> Medium </td>       <td >  </td> </tr><tr id="3.9.">      <td>LM 3.9</td>      <td ><input type="checkbox" value="3.9 Mild"> Mild </td>      <td > <input type="checkbox" value="3.9 Medium"> Medium </td>     <td >  </td> </tr><tr id="3.10.">      <td>LM 3.10</td>      <td ><input type="checkbox" value="3.10 Mild"> Mild </td>      <td > <input type="checkbox" value="3.10 Medium"> Medium </td>       <td >  </td> </tr><tr id="3.11.">      <td>LM 3.11</td>      <td ><input type="checkbox" value="3.11 Mild"> Mild </td>      <td > <input type="checkbox" value="3.11 Medium"> Medium </td>     <td >  </td> </tr><tr id="3.12.">      <td>LM 3.12</td>      <td > </td>      <td > <input type="checkbox" value="3.12 Medium"> Medium </td>      <td >  <input type="checkbox" value="3.12 Spicy"> Spicy </td> </tr><tr id="3.13.">      <td>LM 3.13</td>      <td ><input type="checkbox" value="3.13 Mild"> Mild </td>      <td > <input type="checkbox" value="3.13 Medium"> Medium </td>     <td > <input type="checkbox" value="3.13Spicy"> Spicy   </td> </tr><tr id="3.14.">      <td>LM 3.14</td>      <td > </td>      <td > <input type="checkbox" value="3.14 Medium"> Medium </td>     <td >  </td> </tr><tr id="3.15.">      <td>LM 3.15</td>      <td > </td>      <td > <input type="checkbox" value="3.15 Medium"> Medium </td>    <td >  </td> </tr></table>

> [!cite]- Tall <div class="progressstyle"> <div id="total_4" style="padding: 5px 0px 5px 0px"></div></div>
> <table class="lmtabell">     <tr id="4.1.">      <td>LM 4.1</td>      <td ><input type="checkbox" value="4.1 Mild"> Mild </td>      <td > <input type="checkbox" value="4.1 Medium"> Medium </td>      <td > </td> </tr> <tr id="4.2.">      <td>LM 4.2</td>      <td ><input type="checkbox" value="4.2 Mild"> Mild </td>      <td > <input type="checkbox" value="4.2 Medium"> Medium </td>      <td >  </td> </tr><tr id="4.3.">      <td>LM 4.3</td>      <td ><input type="checkbox" value="4.3 Mild"> Mild </td>      <td > <input type="checkbox" value="4.3 Medium"> Medium </td>      <td >   </td> </tr><tr id="4.4.">      <td>LM 4.4</td>      <td ><input type="checkbox" value="4.4 Mild"> Mild </td>      <td > <input type="checkbox" value="4.4 Medium"> Medium </td>      <td > </td> </tr><tr id="4.5.">      <td>LM 4.5</td>      <td ><input type="checkbox" value="4.5 Mild"> Mild </td>      <td >  </td>      <td >   </td> </tr><tr id="4.6.">      <td>LM 4.6</td>      <td ><input type="checkbox" value="4.6 Mild"> Mild </td>      <td > <input type="checkbox" value="4.6 Medium"> Medium </td>      <td >   </td> </tr><tr id="4.7.">      <td>LM 4.7</td>      <td ><input type="checkbox" value="4.7 Mild"> Mild </td>      <td > <input type="checkbox" value="4.7 Medium"> Medium </td>      <td >   </td> </tr><tr id="4.8.">      <td>LM 4.8</td>      <td ><input type="checkbox" value="4.8 Mild"> Mild </td>      <td > <input type="checkbox" value="4.8 Medium"> Medium </td>      <td >   </td> </tr><tr id="4.9.">      <td>LM 4.9</td>      <td ><input type="checkbox" value="4.9 Mild"> Mild </td>      <td >  </td>      <td > <input type="checkbox" value="4.9 Spicy"> Spicy  </td> </tr><tr id="4.10.">      <td>LM 4.10</td>      <td > </td>      <td > <input type="checkbox" value="4.10 Medium"> Medium </td>      <td > <input type="checkbox" value="4.10 Spicy"> Spicy  </td> </tr><tr id="4.11.">      <td>LM 4.11</td>      <td > </td>      <td >  </td>      <td > <input type="checkbox" value="4.11 Spicy"> Spicy  </td> </tr><tr id="4.12.">      <td>LM 4.12</td>      <td ><input type="checkbox" value="4.12 Mild"> Mild </td>      <td > <input type="checkbox" value="4.12 Medium"> Medium </td>      <td >   </td> </tr><tr id="4.13.">      <td>LM 4.13</td>      <td ><input type="checkbox" value="4.13 Mild"> Mild </td>      <td > <input type="checkbox" value="4.13 Medium"> Medium </td>      <td > <input type="checkbox" value="4.13 Spicy"> Spicy  </td> </tr><tr id="4.14.">      <td>LM 4.14</td>      <td > </td>      <td > </td>      <td > <input type="checkbox" value="4.14 Spicy"> Spicy  </td> </tr><tr id="4.15.">      <td>LM 4.15</td>      <td ><input type="checkbox" value="4.15 Mild"> Mild </td>      <td > <input type="checkbox" value="4.15 Medium"> Medium </td>      <td >  </td> </tr><tr id="4.16.">      <td>LM 4.16</td>      <td > </td>      <td >  </td>      <td > <input type="checkbox" value="4.16 Spicy"> Spicy  </td> </tr><tr id="4.17.">      <td>LM 4.17</td>      <td ><input type="checkbox" value="4.17 Mild"> Mild </td>      <td > <input type="checkbox" value="4.17 Medium"> Medium </td>      <td >   </td> </tr><tr id="4.18.">      <td>LM 4.18</td>      <td ><input type="checkbox" value="4.18 Mild"> Mild </td>      <td ><input type="checkbox" value="4.18 Medium"> Medium  </td>      <td > </td> </tr><tr id="4.19.">      <td>LM 4.19</td>      <td ><input type="checkbox" value="4.19 Mild"> Mild </td>      <td > <input type="checkbox" value="4.19 Medium"> Medium </td>      <td > <input type="checkbox" value="4.19 Spicy"> Spicy  </td> </tr><tr id="4.20.">      <td>LM 4.20</td>      <td ><input type="checkbox" value="4.20 Mild"> Mild </td>      <td > <input type="checkbox" value="4.20 Medium"> Medium </td>      <td > <input type="checkbox" value="4.20 Spicy"> Spicy  </td> </tr> </table>

> [!cite]- Sannsynlighet, kombinatorikk og statistikk <div class="progressstyle"> <div id="total_5" style="padding: 5px 0px 5px 0px"></div></div>
> <table class="lmtabell">     <tr id="5.1.">      <td>LM 5.1</td>      <td ><input type="checkbox" value="5.1 Mild"> Mild </td>      <td > <input type="checkbox" value="5.1 Medium"> Medium </td>      <td >  </td>      </tr>  <tr id="5.2.">      <td>LM 5.2</td>      <td ><input type="checkbox" value="5.2 Mild"> Mild </td>      <td > <input type="checkbox" value="5.2 Medium"> Medium </td>      <td >  </td>      </tr>  <tr id="5.3.">      <td>LM 5.3</td>      <td ><input type="checkbox" value="5.3 Mild"> Mild </td>      <td > <input type="checkbox" value="5.3 Medium"> Medium </td>      <td ></td>      </tr>  <tr id="5.4.">      <td>LM 5.4</td>      <td > </td>      <td > <input type="checkbox" value="5.4 Medium"> Medium </td>      <td > <input type="checkbox" value="5.4 Spicy"> Spicy </td>      </tr>  <tr id="5.5.">      <td>LM 5.5</td>      <td ><input type="checkbox" value="5.5 Mild"> Mild </td>      <td > <input type="checkbox" value="5.5 Medium"> Medium </td>      <td >  </td>      </tr>  <tr id="5.6.">      <td>LM 5.6</td>      <td ><input type="checkbox" value="5.6 Mild"> Mild </td>      <td > <input type="checkbox" value="5.6 Medium"> Medium </td>      <td >  </td>      </tr> <tr id="5.7.">      <td>LM 5.7</td>      <td ><input type="checkbox" value="5.7 Mild"> Mild </td>      <td > <input type="checkbox" value="5.7 Medium"> Medium </td>      <td >  </td>      </tr> <tr id="5.8.">      <td>LM 5.8</td>      <td ><input type="checkbox" value="5.8 Mild"> Mild </td>      <td > <input type="checkbox" value="5.8 Medium"> Medium </td>      <td >  </td>      </tr> <tr id="5.9.">      <td>LM 5.9</td>      <td ><input type="checkbox" value="5. Mild"> Mild </td>      <td > <input type="checkbox" value="5. 9 Medium"> Medium </td>      <td > <input type="checkbox" value="5.9 Spicy"> Spicy </td>      </tr></table>



</div>

<div id="restart" style="display: none">

<button class="button173" onclick="resetprocessCheckedCallouts()">Begynn på nytt</button>

</div>

<br>

<script src="files\script.js"></script>



<script src="files\randomoppgave.js"></script>




> [!hidden] 1.1 Mild 1
> Forklar og gi eksempler på begrepene. Målet er å lage *korte og presise *forklaringer.

> [!hidden] 1.2 Medium  1
> Begrunn ved hjelp av figurer at summen av to partall er et partall

> [!hidden] 1.2 Medium 1.2
> Begrunn algebraisk at summen av to partall er et partall

> [!hidden] 1.2 Medium  2
> Begrunn algebraisk og ved hjelp av figurer at produktet av to naturlige tall der minst ett er et partall, er et partall

> [!hidden] 1.2 Medium  3
> Begrunn at summen av et odde antall påfølgende naturlige tall er delelig med tallet tilsvarende antall ledd i summen. (Altså at summen av tre påfølgende er delelig med tre, summen av fem påfølgende delelig med fem og så videre.)

> [!hidden] 1.2 Medium  4
> Avgjør om summen av et partall antall påfølgende naturlige tall er delelig med tallet tilsvarende antall ledd i summen.

> [!hidden] 1.2 Medium  5
>  Et kvadrattall er et naturlig tall på formen $n^{2}$. Kan et kvadrattall være et primtall? Begrunn.

> [!hidden] 1.2 Medium 6
>  Begrunn algebraisk og ved hjelp av figurer at summen av et partall og et oddetall er et oddetall.

> [!hidden] 1.2 Medium 8
>  Begrunnved hjelp av figurer at produktet av to oddetall er et oddetall.

> [!hidden] 1.2 Medium 9
> Begrunn algebraisk at produktet av to oddetall er et oddetall. 

> [!hidden] 1.2 Spicy  1
> Begrunn eller motbevis påstanden: *Seks er en faktor i ethvert produkt av tre påfølgende naturlige tall.*

> [!hidden] 1.2 Spicy  2
> Primtallsfaktoriser $126$ og $210$. Bruk faktoriseringen til å finne tallenes minste felles multiplum ($\text{mfm}$) og største felles faktor ($\text{sff}$). Gi så et generisk eksempel som begrunner sammenhengen $ab = \text{sff}(a,b) \cdot \text{mfm}(a.b)$, altså at produktet av to tall svarer til produktet av deres $\text{sff}$ og $\text{mfm}$.

> [!hidden] 1.2 Spicy  3
>  $47$ og $74$ er begge tosifra tall laget av de samme sifrene, nemlig $4$ og $7$. Lag flere slike tosifra tall, og undersøk hva som skjer om man deler summen av tallene på summen av sifrene. Begrunn det du finner.

> [!hidden] 1.2 Spicy  4
>  Inndelingen av naturlige tall i par og odde er en inndeling etter delelighet med $2$. Noen tall gir $0$ i rest (to er en faktor), de øvrige gir $1$ i rest. Med andre ord: Alle naturlige tall er enten på formen $2n$ eller $2n + 1$. 
>  Vis at alle kvadrattall er på formen $4n^2$ eller $4n^2+1$.
>  

> [!hidden] 1.2 Spicy  5
> Tilsvarende inndeling kan vi gjøre for delelighet med $3$. Noen gir $0$ i rest, noen $1$ og de øvrige $2$ i rest. Altså: De naturlige tallene er enten *i* tregangen, én mer enn et tall i tregangen, eller to mer enn et tall i tregangen. Vis at ingen kvadrattall (tall på formen $n^{2}$) er to mer enn et tall i tregangen.

> [!hidden] 1.2 Spicy Vurdering uke 2
>  1, 4, 9, 16 og 25 er eksempler på *kvadrattall:* naturlige tall som kan skrives $n^2$. Vis algebraisk at ingen kvadrattall er på formen $4m+2$.

> [!hidden] 1.2 Spicy Vurdering uke 3
> Uten å regne det ut, hvordan kan vi vite hvor mange 0’ere, det vil være på slutten av produktet av tallene 1, 2, 3, 4, 5, 6, 7, 8, 9 og 10?

> [!hidden] 1.2 Spicy Vurdering uke 4
> 

> [!hidden] 1.2 Spicy Vurdering uke 5
> Begrunn, algebraisk, at følgende påstand stemmer.
> *Hvis et tall er en faktor i to tall, så er det også en faktor i differansen mellom tallene.*

> [!hidden] 1.3 Mild 1
> Forklar hvordan et posisjonssystem er bygd opp. Gi eksempler med ulike baser.

> [!hidden] 1.3 Mild 2
>  Hvilke siffer trengs i et posisjonssystem med base syv? Forklar.

> [!hidden] 1.3 Mild 3
> Hvilke siffer treng i et posisjonssystem med base tolv? Forklar.

> [!hidden] 1.3 Mild 4
> Skriv de første tjuefem tallene (eller mer) i base ...
> 1. To
> 2. Tre
> 3. Fem
> 4. Tolv

> [!hidden] 1.3 Mild 5 
> Vis hva tallene «betyr» ved å skrive dem på utvidet form.
> 1. $234_{fem}$
> 2. $307_{åtte}$
> 3. $93A_{elleve}$

> [!hidden] 1.3 Medium 1
>  Gjør om til base ti.
>  
>  $4321_{fem}$

> [!hidden] 1.3 Medium 2
> Gjør om $224_{ti}$ til base tre

> [!hidden] 1.3 Medium 3
> Gjør om til base to.
> 
> $17_{ti}$

> [!hidden] 1.3 Medium 4
> Gjør om til base ti.
> 
>  $666_{syv}$

> [!hidden] 1.3 Medium 5
> Gjør om $144_{ti}$ til base tolv

> [!hidden] 1.3 Medium 6
> Gjør om til base to: 
>  
>  $17_{tolv}$

> [!hidden] 1.3 Medium 7
> Gjør om til base ti.
> 
>  $305_{åtte}$

> [!hidden] 1.3 Medium 8
> Gjør om $777_{ti}$ til base syv

> [!hidden] 1.3 Medium 9
> Gjør om til base to: $72_{åtte}$

> [!hidden] 1.3 Medium 10

> [!hidden] 1.3 Medium 11
> Gjør om til base ti.
> 
>  $A0B3_{tolv}$

> [!hidden] 1.3 Medium 12

> [!hidden] 1.3 Medium Vurdering uke 3
> 1. Forklar kort hva et posisjonssystem er.
> 2. Gjør om $139_{ti}$ til base syv.
> 3. $333_{fire}$ til base seks uten å regne ut i base ti først.

> [!hidden] 1.3 Medium Vurdering uke 4
> 1. Gjør om $121_{ti}$ til base tre
> 2. $101101_{to}$ til base tre.

> [!hidden] 1.3 Medium Vurdering uke 5
> 1. Gjør om $325_{\text{ti}}$ til base åtte.
> 2. Gjør om $112_{fire}$ til base seks.

> [!hidden] 1.3 Medium Vurdering uke 6
> 1. Gjør om $325_{\text{ti}}$ til base ni.
> 2. Gjør om $112_{fire}$ til base fem.

> [!hidden] 1.3 Spicy 1
> Gjør beregningene i den aktuelle basen (uten å oversette til base ti, altså)
> $123_{fem} + 321_{fem}$

> [!hidden] 1.3 Spicy 2
> Finn basen $b$ uten gjett og sjekk.
> 
> $143_{b} = 48_{ti}$

> [!hidden] 1.3 Spicy 3
> Forklar hvordan man enkelt kan finne basen $b$ til tall på formen $121_{b}$ dersom man kjenner tallets verdi i base ti.

> [!hidden] 1.3 Spicy 4
> Finn sifrene $A$ og $B$ når $AB_{fem} = 17_{ti}$ og $AB_{syv} = 23_{ti}$.

> [!hidden] 1.3 Spicy 5
> Når vi uttrykker tall i titallsystemet er et tall delelig med to bare dersom siste siffer er delelig med to. Uttrykt i femtallsystemet, derimot, er et tall delelig med to bare dersom tverrsummen er delelig med to. Begrunn dette. Forsøk også å generalisere: I hvilke baser gjelder siste-siffer-regelen, og i hvilke gjelder tverrsum-regelen?

> [!hidden] 1.3 Spicy 6
> 
> Gjør beregningene i den aktuelle basen (uten å oversette til base ti, altså)
> 
> $321_{fire} - 123_{fire}$

> [!hidden] 1.3 Spicy 7
> Gjør beregningene i den aktuelle basen (uten å oversette til base ti, altså)
>  
>  $32_{åtte} \cdot 24_{åtte}$

> [!hidden] 1.3 Spicy 8
> Gjør beregningene i den aktuelle basen (uten å oversette til base ti, altså)
> 
> $4A3_{tolv}\ :3_{tolv}$

> [!hidden] 1.3 Spicy 9
> Lag egne regnestykker

> [!hidden] 1.3 Spicy 10
> 
> Finn basen $b$ uten gjett og sjekk.
> 
> $153_{b} = 69_{ti}$

> [!hidden] 1.3 Spicy 11
> 
> Finn basen $b$ uten gjett og sjekk.
> 
> $313_{b} = 55_{ti}$

> [!hidden] 1.3 Spicy Vurdering uke 3
> 1. Gjør om $455{seks}$ til base fem. Vis hvordan du går frem.
> 2. Regn ut i den aktuelle basen:
>     1. $12332_{åtte} + 5665_{åtte}$  
>     2. $3132_{fire} : 12_{fire}$

> [!hidden] 1.3 Spicy Vurdering uke 4
> 1. Gjør om $212{tre}$ til base seks. Vis hvordan du går frem.
> 2. Regn ut i den aktuelle basen:
>     1. $12332_{syv} - 5665_{syv}$  
>     2. $143_{syv} : 13_{syv}$

> [!hidden] 1.3 Spicy Vurdering uke 5
> 1. Regn ut i den aktuelle basen:
>     1. a. $\text{A}3_{tolv} \cdot 24_{tolv}$  
>     2. b. $888_{ni} : \ 7_{ni}$

> [!hidden] 1.3 Spicy Vurdering uke 6
> 1. Gjør om $455{syv}$ til base seks. Vis hvordan du går frem.
> 2. Regn ut i den aktuelle basen:
>     1. $12332_{syv} - 5665_{syv}$  
>     2. $3135_{åtte} : 11_{åtte}$

> [!hidden] 1.4 Mild Oppgave
> Gjengi delelighetskriteriene.

> [!hidden] 1.4 Medium Delelighetskriterier: 2
> Begrunn delelighets kriteriet for delelighet med 2 ved hjelp av generisk eksempel.

> [!hidden] 1.4 Medium  Delelighetskriterier: 5
> Begrunn delelighets kriteriet for delelighet med 5 ved hjelp av generisk eksempel.

> [!hidden] 1.4 Medium Delelighetskriterier: 4
> Begrunn delelighets kriteriet for delelighet med 4 ved hjelp av generisk eksempel.

> [!hidden] 1.4 Medium Delelighetskriterier: 3
> Begrunn delelighets kriteriet for delelighet med 3 ved hjelp av generisk eksempel.

> [!hidden] 1.4 Medium Delelighetskriterier: 9
> Begrunn delelighets kriteriet for delelighet med 9 ved hjelp av generisk eksempel.

> [!hidden] 1.4 Medium Delelighetskriterier: 6
> Begrunn delelighets kriteriet for delelighet med 6 ved hjelp av generisk eksempel.

> [!hidden] 1.4 Spicy Delelighetskriterier: 2
> Begrunn delelighets kriteriet for delelighet med 2 ved hjelp av tall på utvida form.

> [!hidden] 1.4 Spicy  Delelighetskriterier: 5
> Begrunn delelighets kriteriet for delelighet med 5 ved hjelp av tall på utvida form.

> [!hidden] 1.4 Spicy Delelighetskriterier: 4
> Begrunn delelighets kriteriet for delelighet med 4 ved hjelp av tall på utvida form.

> [!hidden] 1.4 Spicy Delelighetskriterier: 3
> Begrunn delelighets kriteriet for delelighet med 3 ved hjelp av tall på utvida form.

> [!hidden] 1.4 Spicy Delelighetskriterier: 9
> Begrunn delelighets kriteriet for delelighet med 9 ved hjelp av tall på utvida form.

> [!hidden] 1.4 Spicy Delelighetskriterier: 6
> Begrunn delelighets kriteriet for delelighet med 6 ved hjelp av tall på utvida form.

> [!hidden] 1.5 Mild 1
> Finn summen av de naturlige tallene fra 1 til 9 ved hjelp av Gauss-trikset.

> [!hidden] 1.5 Mild 2
>  Finn summen av de naturlige tallene fra 5 til 16.

> [!hidden] 1.5 Mild 3
>  Undersøk summen av par av nabo-trekanttall (trekanttall (3 og 4) eller (6 og 7) er for eksempler på nabo-trekanttall).
> 1. Beskriv en antakelse du får,
> 2. begrunn den geometrisk

> [!hidden] 1.5 Mild 4
> Alle gjestene i et selskap skal håndhilse med hverandre. Hvordan avhenger antall håndtrykk av antall gjester?

> [!hidden] 1.5 Mild 5
> Finn summen av oddetallene fra 5 til 13.

> [!hidden] 1.5 Mild 6
> Finn summen av partallene fra 6 til 16.

> [!hidden] 1.5 Mild Vurdering uke 4
> Avgjør summen av de $10$ første partallene, det vil si rektangeltall nummer  $10$, ved hjelp av Gauss-trikset (doble summen).

> [!hidden] 1.5 Mild Vurdering uke 5
> Avgjør summen av de $9$ første naturlige tallene, det vil si trekanttall nummer  $n,$ ved hjelp av Gauss-trikset (doble summen) geometrisk.

> [!hidden] 1.5 Mild Vurdering uke 5
> Avgjør summen av de $5$ første oddetallene, det vil si kvadrattall nummer  $5$, ved hjelp av Gauss-trikset (doble summen).

> [!hidden] 1.5 Medium 1
> Utled det eksplisitte uttrykket for summen av de $n$ første naturlige tallene, det vil si trekanttall nummer $n,$ ved hjelp av Gauss-trikset
> 1. ved hjelp av figur
> 2. algebraisk

> [!hidden] 1.5 Medium 2
>  Undersøk summen av par av nabo-trekanttall (trekanttall (3 og 4) eller (6 og 7) er for eksempler på nabo-trekanttall).
>  1. Beskriv en antakelse du får,
>  2. begrunn den geometrisk
>  3. og algebraisk

> [!hidden] 1.5 Medium 3
> Utled det eksplisitte uttrykket for summen av de $n$ første partallene, det vil si rektangeltall nummer $n,$ ved hjelp av Gauss-trikset
> 1. ved hjelp av figur
> 2. algebraisk

> [!hidden] 1.5 Medium 4
> Utled det eksplisitte uttrykket for summen av de $n$ første oddetallene, det vil si kvadrattall nummer $n,$ ved hjelp av Gauss-trikset
> 1. ved hjelp av figur
> 2. algebraisk

> [!hidden] 1.5 Medium Vurdering uke 5
> Utled det eksplisitte uttrykket for summen av de $n$ første oddetallene, det vil si kvadrattall nummer $n,$ ved hjelp av Gauss-trikset.

> [!hidden] 1.5 Medium Vurdering uke 6
> Utled det eksplisitte uttrykket for summen av de $n$ første partallene, det vil si rektangeltall nummer $n,$ ved hjelp av Gauss-trikset.

> [!hidden] 1.5 Spicy 1
> Utled det eksplisitte uttrykket for summen av de $n$ første femkanttallene, sekskanttallene, syvkanttallene...., det vil si k-kanttall nummer $n,$ ved hjelp av Gauss-trikset
> 1. ved hjelp av figur
> 2. algebraisk
> 
> Gjør så mange k-kanttall du trenger. Formålet skal være å forstå teknikken!
> Legg merke til at:
> 
> 1. femkanttallene er følgen, $1, 5, 12, 22\ldots$
> 2. sekskanttallene er følgen, $1, 6, 15, 28, \ldots$
> 3. syvkanttallene er følgen, $1, 7, 18, 34,\ldots$
> 4. $\vdots$
> Se [følgene i tabellen på wikipedia](https://en.wikipedia.org/wiki/Polygonal_number#Table_of_values).

> [!hidden] 1.5 Spicy Vurdering uke 4
> 
> Utled det eksplisitte uttrykket for femkanttall nummer $n$ ved hjelp av Gauss-trikset. Merk at femkanttallene er følgen, $1, 5, 12, 22, \ldots$

> [!hidden] 1.5 Spicy Vurdering uke 5
> 

> [!hidden] 1.5 Spicy Vurdering uke 6
> 
> Utled det eksplisitte uttrykket for syvkanttall nummer $n$ ved hjelp av Gauss-trikset. Merk at syvkanttallene er følgen, $1, 7, 18, 34, \ldots$

> [!hidden] 1.6 Mild 1
> Utled det eksplisitte uttrykket for rektangeltall $n$ ved hjelp av strategien *figurtall-som-sum.* Vis i en figur hvordan tilleggene danner et rektangel.

> [!hidden] 1.6 Mild 2
> Utled det eksplisitte uttrykket for kvadrattall $n$ ved hjelp av strategien *figurtall-som-sum.* Vis i en figur hvordan tilleggene danner et kvadrat.

> [!hidden] 1.6 Mild 3
> Finn summen av oddetallene fra 5 til 13.

> [!hidden] 1.6 Mild 4
> Finn summen av partallene fra 6 til 16.

> [!hidden] 1.6 Medium 1
> Illustrer femkanttallene opp til $P_{4}$, og utled eksplisitt uttrykk for $P_{n}$ ved hjelp av strategien *figurtall-som-sum.*

> [!hidden] 1.6 Medium 2
> Illustrer sekskanttallene opp til $H_{4}$, og utled eksplisitt uttrykk for $H_{n}$ ved hjelp av strategien *figurtall-som-sum.*

> [!hidden] 1.6 Medium 3
> Illustrer syvkanttallene opp til $S_{4}$, og utled eksplisitt uttrykk for $S_{n}$ ved hjelp av strategien *figurtall-som-sum.*

> [!hidden] 1.6 Medium 4
> Undersøk tilleggene for polygontallene (trekant- kvadrat-, femkanttallene og så videre). Forsøk å generalisere mønsteret du finner.
>     1. Argumenter for mønsteret ved å vise til figurene.
>     2. Lag et algebraisk uttrykk som beskriver mønsteret tilleggene følger. (Hvis $n$ står for figurnummer, kan du for eksempel la $m$ stå for antall kanter i polygonen.)

> [!hidden] 1.6 Medium Vurdering uke 5
> Illustrer sekskanttallene opp til $S_3$, og utled eksplisitt uttrykk for $S_n$ ved hjelp av strategien figurtall-som-sum-knepet. Merk at tallrekken som tilhører sekskanttallene er $1, 6, 15, 28,  \ldots$.

> [!hidden] 1.6 Medium Vurdering uke 6
> 
> Illustrer femkanttallene opp til $F_3$, og utled eksplisitt uttrykk for $F_n$ ved hjelp av strategien figurtall-som-sum-knepet. Merk at tallrekken som tilhører femkanttallene er $1, 5, 12, 22, \ldots$.

> [!hidden] 1.6 Spicy 1
> Under ser du figurtall én til fire. Finn eksplisitt sammenheng ved hjelp av strategien *figurtall-som-sum-knepet*.
>  
>  ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image1.png)

> [!hidden] 1.6 Spicy 2
> Under ser du figurtall én til fire. Finn eksplisitt sammenheng ved hjelp av strategien *figurtall-som-sum-knepet*.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image2.png)

> [!hidden] 1.6 Spicy Vurdering uke 5
> På figuren under ser du de fire første figurene i en sammensatt figur, der $F_1 = 4$, $F_2 = 10$ og $F_3 = 19$.. Finn en eksplisitt formel ved hjelp av figurtall-som-sum-knepet.
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-14-31-42.png)

> [!hidden] 1.6 Spicy Vurdering uke 6
> 
> På figuren under ser du de tre første figurene i en sammensatt figur, der $F_1 = 5$, $F_2 = 13$ og $F_3 = 25$.
> 
> Finn en eksplisitt formel ved hjelp av figurtall-som-sum-knepet.
>   ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/figtall1205.svg)

> [!hidden] 1.7 Mild 1
> Illustrer femkanttallene opp til $F_3$, og utled eksplisitt uttrykk for $F_n$ ved å bruke stirre-hardt-metoden.

> [!hidden] 1.7 Mild 2
> Illustrer sekskanttallene opp til $S_3$, og utled eksplisitt uttrykk for $S_n$ ved bruke stirre-hardt-metoden Merk at tallrekken som tilhører sekskanttallene er $1, 6, 15, 28,  \ldots$.

> [!hidden] 1.7 Mild 3
> Illustrer syvkanttallene opp til $S_3$, og utled eksplisitt uttrykk for $S_n$ ved bruke stirre-hardt-metoden. Merk at tallrekken som tilhører syvkanttallene er $1, 7, 18, 34, \ldots$.

> [!hidden] 1.7 Mild 4
> Illustrer åttekanttallene opp til... og så videre, til du har kontroll på teknikken.

> [!hidden] 1.7 Mild Vurdering uke 4
> Illustrer femkanttallene opp til $F_3$, og utled eksplisitt uttrykk for $F_n$ ved å bruke stirre-hardt-metoden. Merk at tallrekken som tilhører femkanttallene er $1, 5, 12, 22, \ldots$.

> [!hidden] 1.7 Mild Vurdering uke 6
> 
> Illustrer syvkanttallene opp til $S_3$, og utled eksplisitt uttrykk for $S_n$ ved bruke stirre-hardt-metoden. Merk at tallrekken som tilhører syvkanttallene er $1, 7, 18, 34, \ldots$.

> [!hidden] 1.7 Medium 1
> Under ser du figurtall én til fire. Finn eksplisitt sammenheng ved å bruke stirre-hardt-metoden.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image1.png)

> [!hidden] 1.7 Medium 2
>  Under ser du figurtall én til fire. Finn eksplisitt sammenheng ved å bruke stirre-hardt-metoden. <br> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image2.png)

> [!hidden] 1.7 Medium 3 (ekstra krevende)
>  Under ser du figurtall én til tre. Finn eksplisitt sammenheng ved å bruke stirre-hardt-metoden. <br> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/d17a5209d55077de9b3ff1db15f2e086d2936193/img/tallteo/fig25.drawio.svg)
> 
> 

> [!hidden] 1.7 Medium 4 (ekstra krevende)
> Under ser du figurtall én til tre. Finn eksplisitt sammenheng ved å bruke stirre-hardt-metoden. <br> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/d17a5209d55077de9b3ff1db15f2e086d2936193/img/tallteo/figurtall18.drawio.svg)

> [!hidden] 1.7 Medium Vurdering uke 4
> På figuren under ser du de tre første figurene i en sammensatt figur, der $F_1 = 5$, $F_2 = 13$ og $F_3 = 25$.
> Finn en eksplisitt formel ved å bruke stirre-hardt-metoden
>   ![Alt text](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/figtall1205.svg)

> [!hidden] 1.7 Medium Vurdering uke 5
> På figuren under ser du de fire første figurene i en sammensatt figur, der $F_1 = 4$, $F_2 = 10$ og $F_3 = 19$.. Finn en eksplisitt formel ved å bruke stirre-hardt-metoden.
>  ![Hustall](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-14-31-42.png)

> [!hidden] 1.7 Medium Vurdering uke 6
> På figuren under ser du de tre første figurene i en sammensatt figur, der $F_1 = 8$, $F_2 = 18$ og $F_3 = 32$. Finn en eksplisitt formel ved å bruke stirre-hardt-metoden.
> 
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-04-21-12-10-31.png)

> [!hidden] 1.8 Mild 1 
> Illustrer trekanttallene opp til $T_3$, og utled et rekursivt uttrykk for $T_n$. Pek også på den rekursive sammenhengen i figurene du har tegnet.

> [!hidden] 1.8 Mild 2
>  Illustrer rektangeltallene opp til $R_3$, og utled et rekursivt uttrykk for $R_n$. Pek også på den rekursive sammenhengen i figurene du har tegnet.

> [!hidden] 1.8 Mild 3
>  Illustrer kvadrattallene opp til $K_3$, og utled et rekursivt uttrykk for $K_n$. Pek også på den rekursive sammenhengen i figurene du har tegnet.

> [!hidden] 1.8 Medium 1 
> Illustrer femkanttallene opp til $F_3$, og utled et rekursivt uttrykk for $F_n$. Pek også på den rekursive sammenhengen i figurene du har tegnet.

> [!hidden] 1.8 Medium 2
> Illustrer sekskanttallene opp til $S_3$, og utled et rekursivt uttrykk for $S_n$. Merk at tallrekken som tilhører sekskanttallene er $1, 6, 15, 28,  \ldots$. Pek også på den rekursive sammenhengen i figurene du har tegnet.

> [!hidden] 1.8 Medium 3
> Illustrer syvkanttallene opp til $S_3$, og utled et rekursivt uttrykk for $S_n$. Merk at tallrekken som tilhører syvkanttallene er $1, 7, 18, 34, \ldots$. Pek også på den rekursive sammenhengen i figurene du har tegnet.

> [!hidden] 1.8 Medium 4
> Illustrer åttekanttallene opp til... og så videre, til du har kontroll på teknikken.

> [!hidden] 1.8 Spicy 1
> Under ser du figurtall én til fire. Beskriv et rekursivt uttrykk som beskriver mønsteret figurene følger. Det må komme tydelig frem hvordan det rekursive uttrykket henger sammen med figurene.
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image1.png)

> [!hidden] 1.8 Spicy 2
> Under ser du figurtall én til fire. Beskriv et rekursivt uttrykk som beskriver mønsteret figurene følger. Det må komme tydelig frem hvordan det rekursive uttrykket henger sammen med figurene.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image2.png)

> [!hidden] 1.8 Spicy Vurdering uke 5
> På figuren under ser du de fire første figurene i en sammensatt figur, der $F_1 = 4$, $F_2 = 10$ og $F_3 = 19$.. Beskriv et rekursivt uttrykk som beskriver mønsteret figurene følger. 
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-14-31-42.png)

> [!hidden] 1.8 Spicy Vurdering uke 5
> 
> På figuren under ser du de tre første figurene i en sammensatt figur, der $F_1 = 8$, $F_2 = 18$ og $F_3 = 32$. Ved hjelp av strategien *form på tillegg*, beskriv figurtallene med et rekursivt uttrykk.
> 
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-04-21-12-10-31.png)

> [!hidden] 1.9 Medium 1
> Finn rekursivt uttrykk for trekanttallene $T_n$, der $T_1 =1$, $T_2 = 3$ og $T_3 = 6$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk: Det eksplisitte uttrykket for trekanttallene er $T_n = \frac{{n(n+1)}}{2}$.

> [!hidden] 1.9 Medium 2
> Finn rekursivt uttrykk for kvadrattallene $K_n$, der $K_1 =1$, $K_2 = 4$ og $K_3 = 9$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk: Det eksplisitte uttrykket for kvadrattallene er $K_n = n^2$

> [!hidden] 1.9 Medium 3
> Finn rekursivt uttrykk for rektangeltallene $R_n$, der $R_1 =2$, $R_2 = 6$ og $R_3 = 12$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk: Det eksplisitte uttrykket for rektangeltallene er $R_n = n(n+1)$.

> [!hidden] 1.9 Medium Vurdering uke 6
> Finn rekursivt uttrykk for trekanttallene $T_n$, der $T_1 =1$, $T_2 = 3$ og $T_3 = 6$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk: Det eksplisitte uttrykket for trekanttallene er $T_n = \frac{{n(n+1)}}{2}$.

> [!hidden] 1.9 Spicy 1
> Finn rekursivt uttrykk for sekskanttallene $H_n$, der $H_1 =1$, $H_2 = 6$ og $H_3 = 15$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk: Det eksplisitte uttrykket for sekskanttallene er $H_n = {n(2n-1)}$.

> [!hidden] 1.9 Spicy 2
> Illustrer femkanttallene opp til $F_3$, og utled rekursivt uttrykk for $F_n$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk at tallrekken som tilhører femkanttallene er $1, 5, 12, 22, \ldots$ og at det eksplisitte uttrykket for sekskanttallene er $F_n = \frac{{3n^2-n}}{2}$.

> [!hidden] 1.9 Spicy 3
>  Illustrer syvkanttallene opp til $S_3$, og utled rekursivt uttrykk for $S_n$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk at tallrekken som tilhører syvkanttallene er $1, 7, 18, 34, \ldots$. og at det eksplisitte uttrykket for sekskanttallene er $S_n = \frac{{5n^2-3n}}{2}$.

> [!hidden] 1.9 Spicy Vurdering uke 5
> Under ser du de fire første figurene i en tallfølge. Finn et rekursivt uttrykk for figurene ved hjelp av differanse mellom eksplisitte uttrykk, der det eksplisitte uttrykket er $n^2+n-1+\frac{{n(n+1)}}{2} = \frac{{3n^2+3n-2}}{2}$.
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image2.png)

> [!hidden] 1.9 Spicy Vurdering uke 6
> 
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-14-37-44.png)
> 
> Over ser du de tre første figurene i bikubetallene. Finn rekursivt uttrykk for bikubetallene $B_n$, der $B_1 =1$, $H_2 = 7$ og $H_3 = 19$ ved hjelp av strategien differanse mellom eksplisitte uttrykk. Merk: Det eksplisitte uttrykket for bikubetallene er $B_n = {3n(n-1)}+1$.
> 

> [!hidden] 1.10 Mild 1
>  Se på figurtallene under.
>  
>   1. Gi en så kort og presis verbal beskrivelse du kan av hvordan figurene vokser (rekursiv sammenheng).
>   2. Illustrer den rekursive sammenhengen i figurene.
>   3. Gi en beskrivelse av den eksplisitte sammenhengen mellom figurnummer og figurtall (presisjon er målet her også).
>   4. Vis den eksplisitte sammenhengen i figurene.
>  
>  ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image2.png)

> [!hidden] 1.10 Mild 2
> Se på figurtallene under.
>  
>   1. Gi en så kort og presis verbal beskrivelse du kan av hvordan figurene vokser (rekursiv sammenheng).
>   2. Illustrer den rekursive sammenhengen i figurene.
>   3. Gi en beskrivelse av den eksplisitte sammenhengen mellom figurnummer og figurtall (presisjon er målet her også).
>   4. Vis den eksplisitte sammenhengen i figurene.
>
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image3.png)

> [!hidden] 1.10 Mild Vurdering uke 5
> 
> Under ser dere de første figurene i et figurtallsmønster.
> 
> Ved å illustrere figurene og markere i illustrasjonen, gi en ordforklaring av
> 1. en eksplisitt sammenheng mellom figur nummer $n$ og antall prikker i figuren.
> 2. en rekursiv sammenheng mellom to påfølgende figurer.
> 
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/b15fcbca3358196bef93bb019492be4cadf6dbe8/img/tallteo/figtallrosa.drawio.svg)

> [!hidden] 1.10 Mild Vurdering uke 6
> 
> Under ser dere de første figurene i et figurtallsmønster.
> Ved å illustrere figurene og markere i illustrasjonen, gi en ordforklaring av
> 1. en eksplisitt sammenheng mellom figur nummer $n$ og antall prikker i figuren.
> 2. en rekursiv sammenheng mellom to påfølgende figurer.
>  
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/figurtall1205.svg)

> [!hidden] 1.10 Medium 1
> Dekomponer figuren på minst tre måter. Illustrer dekomponeringene i figurene, og beskriv dem algebraisk slik at det er en tydelig sammenheng mellom illustrasjon og uttrykk.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tallteo/image2.png)
> 

> [!hidden] 1.10 Medium 2
> Under ser du trekantramme nummer fire, samt fem forslag til eksplisitt uttrykk for trekantramme nummer $n$. 
> 1. Hvordan ser de foregående rammene ut? 
> 2. Hvilke uttrykk stemmer? Argumenter ved hjelp av figuren og ved å omforme uttrykkene. <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-04-03-20-19-18.png) <br> i. $3(n - 1) + 3$ <br> ii. $(n - 1) + n + (n + 1)$<br> iii. $3n$<br> iv. $\frac{(n + 1)(n + 2)}{2} - \frac{(n - 2)(n - 1)}{2}$ <br> v. $3(n + 1) - 3$

> [!hidden] 1.10 Medium Vurdering uke 5
> Under ser dere de første figurene i et figurtallsmønster.
> Velg ut tre av uttrykkene under og bruk figuren til å argumentere hvorfor de gir en eksplisitt formel for antall firkanter i hver figur.
> $$
> \begin{aligned}
> 1. \quad \quad & (n+2)^2-(n-1)^2 + 2(\frac{n(n+1)}{2}) \\
> 2. \quad \quad & 4(n+2) + 2(\frac{n(n+1)}{2}) \\
> 3. \quad \quad & (n+2)^2-(n-1)^2 +n(n+1)\\
> 4. \quad \quad & (n+2)^2+n
> 5. \end{aligned}
> $$
> 
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/3dd0097091ec32c9673a33a4de186678d2649802/img/tallteo/figurer.drawio.svg)

> [!hidden] 1.10 Medium Vurdering uke 6
> 
> Under ser dere dere de fire første figurtallene i en rekke figurtall.
> Velg ut tre av uttrykkene under og bruk figuren til å argumentere hvorfor de gir en eksplisitt formel for antall firkanter i hver figur.
> $$
> \begin{aligned}
> 1. \quad \quad &4\frac{{n(n+1)}}{2} +4n+1 \\
> 2. \quad \quad & 4\left( (n+1)^2-\frac{n(n-1)}{2} \right)+4n+1 \\
> 3. \quad \quad & (2n+1)^2 -4\frac{n(n-1)}{2} \\
> 4. \quad \quad & 4(n+1)^2 -4\left( \frac{n(n-1)}{2} \right)-(4(n+1)-1)
> \end{aligned}
> $$
> 
> ![600](https://raw.githubusercontent.com/Andremartiny/MA-173/31b1dc0629a975ed380203490b26e67c131bca4f/img/tallteo/firkanter.drawio.svg)

> [!hidden] 1.10 Spicy 1
> La $H_{n} = 2 \cdot T_{n + 1} - K_{n - 1}$.
>     1. Illustrer $H_{1}$ til $H_{4}$ ved hjelp av trekant- og kvadrattall.
>     2. Finn eksplisitt uttrykk for $H_{n}$ ved å betrakte geometrisk.
>     3. Bekreft uttrykket du fant i b. ved å regne ut $2 \cdot T_{n + 1} - K_{n - 1}$.
>     4. Bruk uttrykket fra 2. og 3. til å lage et nytt figurmønster som matcher formen på uttrykket (stirre-hardt-metoden bare baklengs, altså).

> [!hidden] 1.10 Spicy 2
>  En figurtallfølge er gitt ved den rekursive sammenhengen $F_{n} = F_{n - 1} + 2n + 1$, der $F_{1} = 2$.
>      1. Illustrer figur 1-4 slik at det går tydelig frem hvordan figuren vokser.
>      2. Finn eksplisitt uttrykk.

> [!hidden] 1.10 Spicy 3
>  Den $n$-te figuren i et figurtallmønster har eksplisitt uttrykk $G_{n} = 2n^{2} - (n - 1)^{2} + \frac{n(n + 1)}{2}$.
>      1. Illustrer figur 1-4 slik at strukturen i det algebraiske uttrykket kommer tydelig frem.
>      2. Finn rekursiv sammenheng.

> [!hidden] 1.10 Spicy 4
> Lag figurtall og finn rekursivt uttrykk til følgende eksplisitte sammenheng: $n^{2} + 3n + 1$. Tips: Forsøk å omforme uttrykket slik at du finner uttrykk du kjenner fra før, sånn som trekanttall, kvadrattall eller kvadratsetninga. Hvor mange figurtall klarer du å lage?

> [!hidden] 1.10 Spicy 5
> Du får vite at et figurtall $F_n$ øker på følgende måte. $F_1 = 2$, $F_2 = 7$, $F_3 = 14$, $F_4 = 23$ og $F_5 = 34$. Lag en figur som følger mønsteret til $F_n$. Begrunn sammenhengen mellom figuren og tallfølgen.

> [!hidden] 1.10 Spicy Vurdering uke 5
> En figurtallfølge er gitt ved den rekursive sammenhengen $F_{n} = F_{n - 1} + 3n + 2$, der $F_{1} = 4$.
> 1. Illustrer figur 1-4 slik at det går tydelig frem hvordan figuren vokser.
> 2. Finn eksplisitt uttrykk på to måter

> [!hidden] 1.10 Spicy Vurdering uke 6
> 
> Du får vite at et figurtall $F_n$ øker på følgende måte. $F_1 = 6$ og $F_n = F_{n-1}+5n-2$.
> 
> Lag en figur som følger mønsteret til $F_n$. Det er nok å illustrere $F_1$, $F_2$ og $F_3$, så lengde det får fram mønsteret.
> 1. Vis og forklar sammenhengen mellom tallrekken og figurene rekursivt.
> 2. Finn en eksplisitt formel på to forskjellige måter.

> [!hidden] 2.1 Medium  Alfa s. 346–347.
> 1. 4.9
> 2. 4.12
> 3. 4.13
> 4. 4.14
> 5. 4.16

> [!hidden] 2.1 Medium 2
> En lineær funksjon er en funksjon på formen $f(x) = ax + b$. Forklar og vis i et koordinatsystem hva som skjer når
> 1. stigningstallet $a$ endres
> 2. konstantleddet $b$ endres

> [!hidden] 2.2 Spicy 1
> Alfa s. 346–347.
>     1. 4.10 (Det sentrale her er å _forstå_ hvordan man finner likninga så godt at man kort og presist kan _forklare_ både hvordan og hvorfor. Prioriter derfor å gjøre _noen oppgaver grundig_ og med forklaring, ikke _mange oppgaver kjapt_.)
>     2. 4.11
>     3. 4.15
>     4. 4.17
>     5. **Bonus** (ut over læringsmålet): 4.18 og 4.19

> [!hidden] 2.3 Medium 1
> La en andregradsfunksjon ha formen $f(x)=ax^2+c$. Forklar og vis i et koordinatsystem hva som skjer når
>    a. parameten $a$ endres
>    b. parameten $c$ endres

> [!hidden] 2.3 Medium 2
> Vi kan tenke på en kvadratisk funksjon $ax^2+bx+c$ som en lineær funksjon $bx+c$ som er gitt et kvadratisk tillegg $ax^2$. Skisser en graf, og forklar hvorfor det kvadratiske uttrykket gir en buet graf. 

> [!hidden] 2.4 Medium 1
> En omvendt proporsjonal funksjon er en funksjon på formen $f(x) = {a\over x}$. Forklar og skisser hvordan grafen til $f(x) = {100\over x}$ oppfører seg. Bruk skissen til å forklare hvordan endringer i parameteren \(a\) påvirker grafens utseende, også når $a<0$.

> [!hidden] 2.5 Medium 1
> Gitt $4x - 7 = - 5x + 3$.
> 1. Løs likningen.
> 2. Forklar hva det vil si at tallet du fant er løsning av likningen.
> 3. Tolk VS og HS som funksjonsuttrykk, og skisser grafene.
> 4. Forklar sammenhengen mellom 2. og 3.

> [!hidden] 2.5 Medium 2
>  Gitt $3(x - 7) = - \frac{1}{2}x + 3$.
>  1. Løs likningen.
>  2. Forklar hva det vil si at tallet du fant er løsning av likningen.
>  3.  Tolk VS og HS som funksjonsuttrykk, og skisser grafene.
>  4.  Forklar sammenhengen mellom 2. og 3.

> [!hidden] 2.5 Medium 3
> Forklar ved hjelp av et eget eksempel, hva som menes med løsningen av en lineær likning. Forklar både algebraisk og grafisk, og pek på sammenhengen mellom dem.

> [!hidden] 2.5 Medium 4
> Du løper sammen med en av de fjernstyrte bilene dine langs en rett strekning. Bilen holder seks meter i sekundet, mens du klarer $3,\!5$. Fjernkontrollens rekkevidde er $200$ meter.
> 1. Hvor langt kommer du før bilen er utenfor rekkevidde?
> 2. Illustrer turen grafisk.
> 3. Hvis du starter med $150$ meters forsprang, når og hvor tar bilen deg igjen?
> 4. Lag et uttrykk som viser avstanden mellom deg og bilen som funksjon av tiden.
> 5. Du er ute på samme strekning med den andre fjernstyrte bilen din. Du starter med $150$ meters forsprang. Etter å ha løpt $140$ meter, tar bilen deg igjen. Hva er bilens fart?

> [!hidden] 2.5 Medium 5
> La $f(x) = - 15x + \frac{1}{2}$.
> 1. Hvor skjærer $f$ andreaksen, og hvorfor? (forklar)
> 2. Hvor skjærer $f$ førsteaksen, og hvorfor? (forklar)

> [!hidden] 2.5 Medium 6
> Lag tekstoppgaver/finn passende kontekster til likningene. Tolk og vis i koordinatsystem.<br>a. $170x + 900 = 230x + 200$<br>b. $3 - \frac{1}{2}t = 1$

> [!hidden] 2.5 Spicy 1
> La $f(x) = \frac{12}{x}$ og $g(x) = 3x - \frac{1}{2}$.<br>
> 1. Skisser grafene.<br>
> 2. Finn eventuelle skjæringspunkt ved regning.

> [!hidden] 2.5 Spicy 2
>  La $f(x) = - 6x + b$ og $g(x) = x^{2} - 4x$.<br>
>  1.  Bestem $b$ slik at $f$ og $g$ skjærer hverandre i $x = 1$ og $x = - 3$.<br>
>  2. Skisser grafene.

> [!hidden] 2.5 Spicy 3
> En fjernstyrt bli som kjører 12 m/s bruker 3/2 sekunder på å nå topphastigheten. Frem til det er strekningen den tilbakelegger gitt ved $s(t) = 4t^{2}$, der $t$ er tiden målt i sekunder. Fra og med 3/2 sek., holder bilen 12 m/s.<br>
> 1. Skisser situasjonen i et koordinatsystem.<br>
> 2. Finn funksjonsuttrykket som beskriver tilbakelagt strekning fra og med 3/2 sek.

> [!hidden] 2.6 Mild 1
> Ta utgangspunkt i en funksjonssammenheng (velg selv), og bruk den til å forklare begrepene.

> [!hidden] 2.6 Mild  2
> Sammenhengen mellom sidelengden og arealet av et kvadrat er en funksjonssammenheng. Bruk eksemplet til å forklare begrepene.

> [!hidden] 2.6 Medium 1
> Sammenhengen mellom sidelengden og arealet av et kvadrat er en funksjonssammenheng.<br>
> 1. Bruk eksemplet til å forklare begrepene.<br>
> 2. Arealfunksjonen er her uttrykt som en situasjonsbeskrivelse.<br> Uttrykk den også som tabell, funksjonsuttrykk og graf.

> [!hidden] 2.6 Medium 2
> Sammenhengen mellom grader målt i Fahrenheit og grader målt i Celsius er en funksjonssammenheng.<br>
> 1. Bruk eksemplet til å forklare begrepene.<br>
> 2. Sammenhengen mellom temperaturskalaene er her uttrykt som en situasjonsbeskrivelse. Uttrykk den også som tabell, funksjonsuttrykk og graf.
> (Her må du enten google eller, hvis du er tøff (og det er du jo),
> bruke dette: Sammenhengen er lineær, og $(32,\ 0)$ og $(41,\ 5)$ er to
> punkter på grafen, der førstekoordinat er temperaturen i Fahrenheit,
> andrekoordinat tilhørende Celsius-verdi.)

> [!hidden] 2.6 Medium 3
> Under ser du noen par av variabler. Avgjør og begrunn i hvert tilfelle om den ene er funksjon av den andre. Begrunnelsen må vise til en definisjon av funksjon og en algebraisk eller grafisk fremstilling av situasjonen.<br>
> 1. Temperaturen der du bor og tiden gjennom ett døgn.<br>
> 2. Omkretsen av et rektangel og arealet av rektanglet.<br>
> 3. Omkretsen av en sirkel og arealet av sirkelen.<br>
> 4. En balls høyde over bakken og tiden målt fra da du slapp den.

> [!hidden] 2.6 Medium 4
> Oppgavene 4.1--4.5, s. 335 i Alfa er også ok oppgaver av typen «er y funksjon av x i *dette* tilfellet?»
> [!hidden] 2.7 Medium 1
> Alfa s. 335--336: oppgavene 4.6--4.8

> [!hidden] 2.7 Medium 2
> Overgang mellom graf og situasjon.
> 1. Gi en passende situasjonsbeskrivelse til grafen under.
> 2. Hvordan vil grafen til samme situasjon se ut dersom andreaksen heller måler tilbakelagt avstand?
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/Picture2.jpg)

> [!hidden] 2.7 Medium 3
> Tabellen viser en forenklet trinnskattemodell. Dersom man tjener $60\ 000$ eller mer, betaler man skatt på hele beløpet, ikke bare den delen som overstiger frikortgrensa. Skattesatsene slår inn ved $60\ 000$, $300\ 000$ og så videre. Tegn en graf som viser sammenhengen mellom brutto- og nettoinntekt.
> 
> 
> | **Bruttolønn**    | **Skattetrekk** |
> | ----------------- | --------------- |
> | 0- 60 000         |  0%             |
> | 50 000 - 300 000  | 20%             |
> | 300 000 - 450 000 | 24%             |
> | 450 000 - 600 000 | 28%             |
> | 600 000 - 800 000 | \>30%           |

> [!hidden] 2.7 Medium 4
> Se figuren under. Skisser en graf over sammenhengen mellom krukkas høyde og volum, der førsteaksen angir høyden og andreaksen volumet.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/Picture1.jpg)

> [!hidden] 2.7 Medium 5
> Klassen din får oppgaven under. Mange av elevene velger den øverste grafen med begrunnelser av typen «her ser vi tydelig hvordan bakken blir brattere».
> 
> 1. Hva er misforståelsen disse elevene har?
> 2. Forklar hvorfor den nederste grafen er den som passer til situasjonen.

> [!hidden] 2.7 Medium Nokut V24
> ![[Files/2.7 Gjøre om mellom ulike representasjonsformer for funksjonssammenhenger som ikke er gitt ved en formel..png]]
> Merk at oppgave b ikke er like relevant til læringsmålet, men til den nasjonale deleksamen.

> [!hidden] 2.7 Medium Nokut V24
> ![[Files/2.7 Gjøre om mellom ulike representasjonsformer for funksjonssammenhenger som ikke er gitt ved en formel.-2.png]]

> [!hidden] 2.8 Mild 1
> Gi et eksempel på en lineær funksjon, og forklart kort, med utgangspunkt i eksemplet ditt, hva som kjennetegner en lineær funksjon.

> [!hidden] 2.8 Mild 2
>  Gi et eksempel på en kvadratisk funksjon, og forklart kort, med utgangspunkt i eksemplet ditt, hva som kjennetegner en kvadratisk funksjon.

> [!hidden] 2.8 Mild 3 
> Gi et eksempel på en omvendt proporsjonal funksjon, og forklart kort, med utgangspunkt i eksemplet ditt, hva som kjennetegner en omvendt proporsjonal funksjon.

> [!hidden] 2.8 Medium 1
> Avgjør og begrunn hva slags funksjon det er snakk om i hvert tilfelle. Begrunnelsen må vise til både en graf og et funksjonsuttrykk.<br>
> 1.  Sammenhengen mellom sidene i et rektangel med fast areal.<br>
> 2. Sammenhengen radius og areal i en sirkel.<br>
> 3. Sammenhengen mellom tid og avstand hjemmefra for en person som holder jevn fart.

> [!hidden] 2.8 Spicy 1Lineære funksjoner.
> 
>  1. Angi en situasjon som svarer til en lineær funksjon.<br>
>  2. Skisser grafen, og sett opp funksjonsuttrykk.<br>
>  3. Begrunn kort hvordan grafen og funksjonsuttrykket svarer til situasjonseksemplet.

> [!hidden] 2.8 Spicy 2 Kvadratiske funksjoner.
> 1.  Angi en situasjon som svarer til en kvadratisk funksjon.<br>
> 2. Skisser grafen, og sett opp funksjonsuttrykk.<br>
> 3. Begrunn kort hvordan grafen og funksjonsuttrykket svarer til situasjonseksemplet.

> [!hidden] 2.8 Spicy 3 Omvendt proporsjonale funksjoner.
> 1. Angi en situasjon som svarer til en omvendt proporsjonal funksjon.<br>
> 2. Skisser grafen, og sett opp funksjonsuttrykk.<br>
> 3. Begrunn kort hvordan grafen og funksjonsuttrykket svarer til situasjonseksemplet.

> [!hidden] 2.8 Spicy 4
> Tabellen under viser en funksjonssammenheng.<br>
> 1. Avgjør om den er lineær, kvadratisk eller omvendt proporsjonal.<br>
> 2. Lag en passende situasjon som kan høre til funksjonssammenhengen.<br>
> 3. Finn funksjonsuttrykk, og skisser grafen.
>
> | x  | 2    | 3    | 4   | 6   | 12  |
> |--- |----- |----- |---- |----- | ----- |
> | y  | 150  | 100  | 75  | 50  | 25 |

> [!hidden] 2.8 Spicy 5
> Under ser du grafen til en funksjon.<br>
> 1. Avgjør hva slags funksjon det er snakk om.<br>
> 2. Finn funksjonsuttrykket.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-20-49-07.png)

> [!hidden] 3.1 Mild 1
>  Alfa s. 279
>  1. 3.40 a)--d). Løs likningene på flere måter der det virker naturlig.
>  2. 3.46 Løs likningene på flere måter der det virker naturlig, ikke bare slik boka spør etter.
>  3. 3.47 Løs likningene på flere måter der det virker naturlig, ikke bare slik boka spør etter.

> [!hidden] 3.1 Mild 2
> Løs likningen på tre måter: ved hjelp av strategiene _holde over_ og _arbeide baklengs,_ og på «vanlig» måte.
> $$
> \frac{3x + 5}{7} = 2
> $$

> [!hidden] 3.1 Mild 3
> Arne og Berit har $45$ klinkekuler til sammen. Berit har tre flere enn Arne. Hvor mange klinkekuler har hver av dem?
> 1.  Løs ved hjelp av en illustrasjon.
> 2. Løs ved hjelp av en likning.

> [!hidden] 3.1 Mild 4
> Arne og Berits samlede alder er $18$. For tre år siden var Berit dobbelt så gammel som Arne. Hvor gamle er hver av dem?
> 1. Løs ved hjelp av en illustrasjon.
> 2. Løs ved hjelp av en likning.

> [!hidden] 3.1 Mild Vurdering uke 3
> Løs likningen $\frac{3x-5}{2} = 17$. på to måter, formelt og uformelt.

> [!hidden] 3.1 Mild Vurdering uke 4
> Løs likningen $\frac{-2x+5}{3} = 1$. på to måter, formelt og uformelt.

> [!hidden] 3.1 Mild Vurdering uke 5
> Løs likningen $\frac{4x+10}{3} = 10$. på to måter, formelt og uformelt.

> [!hidden] 3.1 Mild Vurdering uke 6
> 
> Løs likningen $3(x-1)=2(x+1)$ på to måter, formelt og uformelt.

> [!hidden] 3.1 Medium 1
> Alfa s. 279
> 1.  3.40 e)--f). Løs likningene på flere måter der det virker naturlig.
> 2. 3.48 a)

> [!hidden] 3.1 Medium 2
> Løs likningene.
> 
> $\frac{4(x - 1)}{3} - 2x = \frac{3x}{5}$

> [!hidden] 3.1 Medium 2.5
> Løs likningen.
> 
> $\frac{5}{2}(2x + 1) = \frac{x - 1}{3} + 7$

> [!hidden] 3.1 Medium 3
> Løs likningen på tre måter: ved hjelp av strategiene _holde over_ og _arbeide baklengs,_ og på «vanlig» måte.
> $$
> \frac{20}{\left( \frac{4x - 2}{3} \right) - 2} = 5
> $$

> [!hidden] 3.1 Medium 4
> På et klassetrinn er det $70$ elever. Alle deltar i en idrett. Antallet elever på håndball er tre mer enn det dobbelte av antallet på fotball. De som spiller basket, er tre færre enn halvparten av dem som spiller fotball. Ingen elever deltar på mer enn én idrett.
> 1. Finn ut hvor mange som spiller hva ved hjelp av en illustrasjon.
> 2. Sett opp og løs en likning som passer situasjonen. Vis tydelig hvordan likningen samsvarer med situasjonen.

> [!hidden] 3.1 Medium 5
> Blant 163 spurte mennesker, svarte alle at de spiser enten taco, nudler eller foie gras på fredager. Det er 35 flere som spiser taco enn nudler, og antallet som spiser foie gras er det tredobbelte av én mer enn antallet som spiser nudler.
> 1.  Fullfør og bruk illustrasjonen under til å finne ut hvor mange som spiser hva.
> 2. Sett opp og løs likningen situasjonen svarer til.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-15-14-26.png)

> [!hidden] 3.1 Medium Vurdering uke 3
> 1. Løs likningen $\displaystyle\frac{14}{3-\frac{4x-1}{3}}= 7$ på en uformell måte. Løs likningen deretter formelt.
> 2. På en skole kan elevene velge én idrett. Det er 26 flere i svømming enn i turn, og det er dobbelt så mange i klatring som i svømming. I alt er det 370 elever på skolen. Hvor mange er det elever er det på de tre idrettsgrenene? Løs problemet på to måter.

> [!hidden] 3.1 Medium Vurdering uke 4
> 1. Løs likningen på to måter, formelt og uformelt. La det gå klart frem at hvert steg i løsningen din må være riktig. $$3 + \frac{12}{\frac{3x+3}{8}} = 7$$
> 2. En lærer ga elevene følgende tallgåte: "Tenk på et tall. Legg til fem, og multipliser summen med fire. Trekk så fra seks, og del det du fikk på to. Trekk til slutt fra syv. Hvis du forteller meg tallet du nå har, skal jeg fortelle deg hvilket tall du tenkte på." En elev oppgir åtte. Hvilket tall tenkte hun på? Løs problemet på to måter.  

> [!hidden] 3.1 Medium Vurdering uke 5
> 1. Løs likningen $\displaystyle\frac{15}{\frac{2x-4}{2}-2}= 5$ på en uformell måte. Løs likningen deretter formelt.
> 2. Henrik og André gikk for å handle. Henrik hadde med seg 44 kr og André hadde 98 kr. André brukte fire ganger så mye som Henrik. Da de gikk hjemover, hadde de like mye igjen. Hvor mye brukte hver av dem? Løs problemet på to måter.

> [!hidden] 3.1 Medium Vurdering uke 6
> 1. Løs likningen $\displaystyle\frac{20}{\frac{4x-2}{3}-2}= 5$ på en måte som ikke innebærer "flytt og bytt" eller å utføre samme operasjon på hver side av likhetstegnet en uformell måte. Løs likningen deretter formelt.
> 2. På et klassetrinn er det $70$ elever. Alle deltar i en idrett. Antallet elever på håndball er tre mer enn det dobbelte av antallet på fotball. De som spiller basket er tre færre enn halvparten av de som spiller fotball. Ingen elever deltar på mer enn én idrett.
>     1. Finn ut hvor mange som spiller hva ved hjelp av en illustrasjon.
>     2. Sett opp og løs en likning som passer situasjonen. Vis tydelig hvordan likningen samsvarer med situasjonen.

> [!hidden] 3.2 Mild 1
> Alfa s. 282
> Oppgave 3.68

> [!hidden] 3.2 Mild 2
> Alfa s. 282
> Oppgave 3.69

> [!hidden] 3.2 Mild 3
> Alfa s. 282
> Oppgave 3.70 a)--f)

> [!hidden] 3.2 Mild Vurdering uke 3
> Løs ulikheten $2(5+x) \leq 6$.

> [!hidden] 3.2 Mild Vurdering uke 4
> 

> [!hidden] 3.2 Mild Vurdering uke 5
> 

> [!hidden] 3.2 Mild Vurdering uke 6
>  
> Løs ulikheten $6(x+3) < 3$.

> [!hidden] 3.2 Medium 1
> Henrik skal klatre og må låne klatreutstyr. Han har 500 kroner og utstyret koster 100kr i tillegg til 50 kr timen. Når Henrik er ferdig har han fortsatt penger igjen. Sett opp og løs en ulikhet som viser hvor lenge Henrik kan ha klatret?

> [!hidden] 3.2 Medium Nokut H24
> ![[Files/3.2 Løse lineære ulikheter, gitt både med og uten kontekst, ved hjelp av ulike strategier.-1.png]]

> [!hidden] 3.2 Medium Nokut H24
> ![[Files/3.2 Løse lineære ulikheter, gitt både med og uten kontekst, ved hjelp av ulike strategier..png]]

> [!hidden] 3.2 Medium Vurdering uke 3
> 1. Løs ulikheten $\displaystyle \frac{{-x+1}}{2} \leq \frac{{x+11}}{11}$.
> 2. Henrik plukker ofte jordbær som sommerjobb. Han får muligheten til å velge mellom 5 kroner per kurv han plukker pluss et grunnhonorar på 100 kroner dagen, eller 3 kroner per kurv og 150 kroner ekstra per dag. Henrik lurer på hvor mange kurver han må plukke om dagen for at det skal lønne seg å velge alternativet som gir 5 kroner per kurv. Sett opp en ulikhet som samsvarer med situasjonen og løs ulikheten for å hjelpe Henrik.

> [!hidden] 3.2 Medium Vurdering uke 4
> 1. Løs ulikheten $\displaystyle \frac{{3-x}}{4} \leq \frac{{-x}}{5}$
> 2. André skal kjøpe klær til barna sine. Han trenger én body, og to bukser til Mathias. Totalt koster dette 300 kroner. I tillegg skal han kjøpe noen sokker til Philip. Sokkene koster 35 kroner hver. Han ser at hvis han kjøper for mer enn 1000 kroner så får han 20% rabatt og tenker *Man kan vel aldri få for mange sokker?* Sett opp en ulikhet som samsvarer med situasjonen over og løs den for å finne ut hvor mange par sokker André må kjøpe for å få rabatten.

> [!hidden] 3.2 Medium Vurdering uke 5
> 1. Løs ulikheten $\displaystyle \frac{{-x+7}}{7} \leq \frac{{5-x}}{3}$.
> 2. André må kjøpe nye vertikale tavler til undervisningen sin. I tillegg har han lyst på nye kortstokker for å dele inn i tilfeldige grupper. Han har med seg 400 kroner og tavlene koster 175 kroner. Én kortstokk koster 30 kroner. André lurer på hvor mange kortstokker han kan kjøpe. Sett opp en ulikhet som samsvarer med situasjonen over og løs den for å finne ut hvor mange kortstokker han kan kjøpe.

> [!hidden] 3.2 Medium Vurdering uke 6
> 1. Løs ulikheten $\displaystyle \frac{{-x+1}}{2} \leq \frac{{12}}{7}$.
> 2. Henrik skal en tur til sentrum med familien. Han vurderer å ta buss og må da betale 300 kroner tur/retur. Hvis han ikke tar buss, tar han bilen. Da må han betale 20 kroner i bompenger, i tillegg til at han må betale 60 kroner i timen for å ha bilen parkert. Sett opp en ulikhet som kan løses for å finne ut av når det lønner seg å ta buss. Løs ulikheten.

> [!hidden] 3.3 Mild 1
> Alfa s. 281 - 3.60. Løs på så mange måter du greier.1. 

> [!hidden] 3.3 Mild 2
> For 17 flasker får du 43 kroner i pant. Noen av flaskene gir 2 og noen 3 kroner i pant. Hvor mange av hver type pantet du?

> [!hidden] 3.3 Mild 3
> Hvis du betaler 125 kroner med til sammen 13 fem- og tyvekroninger, hvor mange av hver har du betalt med?

> [!hidden] 3.3 Mild Vurdering uke 3
> Under ser du to likninger med to ukjente.
> 
> $2(x - y) = y - 11$
> 
> $3(1 - x) + 2y = 2$.
> 
> Løs likningssettet ved hjelp av
> 1. innsettingsmetoden og
> 2. addisjonsmetoden.

> [!hidden] 3.3 Mild Vurdering uke 4
> 
> Under ser du to likninger med to ukjente.
> 
> $2y = 3(1-2x) - y$,
> 
> $\frac{y-3x}{2} = 8$.
> 
> Løs likningssettet ved hjelp av
> 1. grafisk metode og
> 2. addisjonsmetoden.

> [!hidden] 3.3 Mild Vurdering uke 5
> 
> Under ser du to likninger med to ukjente. 
> $$
> \begin{align*} 
> 6x + 5 y & = 45 - 2y \\
> 3x + y & = - y +15
> \end{align*} 
> $$
> 
> Løs likningssettet ved hjelp av
> 1. innsettingsmetoden og
> 2. addisjonsmetoden.

> [!hidden] 3.3 Mild Vurdering uke 6
> 
> Under ser du to likninger med to ukjente.
> $$
> \begin{align*} 6x+5y  & = 45-2y \\ 6x+2y &= -2y + 30 \end{align*} 
> $$
> 
> Løs likningssettet ved hjelp av
> 1. innsettingsmetoden og
> 2. addisjonsmetoden.

> [!hidden] 3.3 Medium 1
> Alfa s. 281. Løs på så mange måter du greier.
> Oppgave 3.60
> 2. 3.63
> 3. 3.64

> [!hidden] 3.3 Medium 2
> Alfa s. 281. Løs på så mange måter du greier.
> Oppgave  3.63
> 3. 3.64

> [!hidden] 3.3 Medium 3
> Alfa s. 281. Løs på så mange måter du greier.
> Oppgave 3.64

> [!hidden] 3.3 Medium NOKUT V23
> ![[Files/3.3 Løse lineære likningssett med to ukjente, gitt både med og uten kontekst, på ulike måter.-4.png]]

> [!hidden] 3.3 Medium Nokut V24
> ![[Files/3.3 Løse lineære likningssett med to ukjente, gitt både med og uten kontekst, på ulike måter..png]]

> [!hidden] 3.3 Medium Nokut H24
> ![[Files/3.3 Løse lineære likningssett med to ukjente, gitt både med og uten kontekst, på ulike måter.-2.png]]

> [!hidden] 3.3 Medium Vurdering uke 3
> 1. To tall har følgende to egenskaper: Egenskap 1: Divisjon av det største tallet med det andre gir $1$ og $1$ i rest. Egenskap 2: Tar du differansen mellom tallene og deretter deler differansen på 3 får du 3 mindre enn en tredjedel av det største tallet. Avgjør ved hjelp av en formell strategi hvilke to tall det er snakk om.
> 2. André panter $30$ flasker, og får $72$ kroner. Noen flasker gir to og resten tre kroner i pant. Uten bruk av likninger eller gjett og sjekk, avgjør hvor mange flasker André pantet av hver type.

> [!hidden] 3.3 Medium Vurdering uke 4
> 
> På en berg og dalbane er det 40 vogner. I noen vogner sitter det tre personer og i andre fem. Totalt er det 174 med på berg og dalbanen. Bestem hvor mange vogner det sitter tre personer i og hvor mange det sitter fem personer i.
>   1. Vis hvordan elever kan, uten bruk av likninger kan løse oppgaven.
>   2. Bruk informasjonen til å lage et likningssett og
>       1.  Løs oppgaven ved hjelp av innsettingsmetoden.
>       2. Løs oppgaven ved hjelp av addisjonsmetoden.

> [!hidden] 3.3 Medium Vurdering uke 5
> Henrik befinner seg i Retnym, der myntenheten heter Renork (ren), og myntene bare finnes i valørene 3 og 5 ren. Her har han handlet et verdifullt eksemplar av Euklids Elementer. Han betalte med 17 mynter til en verdi av 69 ren. Hvor mange mynter av hver valør betalte Henrik for boka?
> 1. Løs oppgaven uten å bruke likninger eller gjett og sjekk.
> 2. Løs oppgaven ved å sette og løse et likningssett på to måter.

> [!hidden] 3.3 Medium Vurdering uke 6
> 
> Denne oppgaven ble gitt på ungdomstrinnet.
> 
> På en sjø er det 31 båter. I noen båter sitter det to personer og i noen båter sitter det tre personer. Det sitter til sammen 69 personer i de 31 båtene. Bestem hvor mange båter det sitter to personer i og hvor mange det sitter tre personer i.
> 
> 1. Vis hvordan elever kan, uten bruk av likninger kan løse oppgaven.
> 
> 2. Bruk informasjonen til å lage et likningssett og>  
>     1. Løs oppgaven ved hjelp av innsettingsmetoden.
>     2. Løs oppgaven ved hjelp av addisjonsmetoden.

> [!hidden] 3.4 Medium 1
> Alfa s. 279 oppgave 3.40. Løs likningene på flere måter der det virker naturlig. Forklar og begrunn stegene i strategiene du bruker.

> [!hidden] 3.4 Medium 2
> Alfa s. 279 oppgave 3.46. Løs likningene på flere måter der det virker naturlig, ikke bare slik boka spør etter. Forklar og begrunn stegene i strategiene du bruker.

> [!hidden] 3.4 Medium 3
> Alfa s. 279 oppgave 3.47. Løs likningene på flere måter der det virker naturlig, ikke bare slik boka spør etter. Forklar og begrunn stegene i strategiene du bruker.

> [!hidden] 3.4 Medium 4
> Alfa s. 282 oppgave 3.68. Undersøk og begrunn, gjerne på flere måter hvis mulig.

> [!hidden] 3.4 Medium 5
> Alfa s. 282 oppgave 3.69. Undersøk og begrunn, gjerne på flere måter hvis mulig.

> [!hidden] 3.4 Medium 6 
> Alfa s. 279 oppgave 3.70.  Forklar hver overgang (slik Alfa ber om), og begrunn --gjerne på flere måter -- hva som foregår de gangene du må «snu ulikhetstegnet».

> [!hidden] 3.4 Medium 7
> Løs NOKUT-oppgaven under (V2023) <br> ![[Files/3.4NOKUTV2023.png]]

> [!hidden] 3.4 Medium Nokut H24
> ![[Files/3.4 Forklare, begrunne og analysere løsningsstrategier for likninger og ulikheter..png]]

> [!hidden] 3.4 Medium Nokut H24
> ![[Files/3.4 Forklare, begrunne og analysere løsningsstrategier for likninger og ulikheter.-2.png]]

> [!hidden] 3.4 Medium Nokut V24
> ![[Files/NokutV24.png]]

> [!hidden] 3.4 Medium Vurdering uke 3
> 1. En elev spør deg hva som egentlig foregår når vi "flytter og bytter" i likninger. Gi en kort og forståelig forklaring.
> 2. Den samme eleven er fornøyd med forklaringa di, og hoster opp en ny didaktisk utfordring til deg: "Hvorfor snur vi ulikhetstegnet når vi multipliserer med et negativt tall?" Gi en kort og forståelig forklaring.

> [!hidden] 3.4 Medium Vurdering uke 5
> 1. En elev spør deg hva som egentlig foregår når vi "flytter og bytter" i likninger. Gi en kort og forståelig forklaring.
> 2. Den samme eleven er fornøyd med forklaringa di, og hoster opp en ny didaktisk utfordring til deg: "Hvorfor snur vi ulikhetstegnet når vi multipliserer med et negativt tall?" Gi en kort og forståelig forklaring.

> [!hidden] 3.4 Medium Vurdering uke 6
> 1. En elev spør deg hva som egentlig foregår når vi "flytter og bytter" i likninger. Gi en kort og forståelig forklaring.
> 2. Den samme eleven er fornøyd med forklaringa di, og hoster opp en ny didaktisk utfordring til deg: "Hvorfor snur vi ulikhetstegnet når vi multipliserer med et negativt tall?" Gi en kort og forståelig forklaring.

> [!hidden] 3.4 Spicy 1
> H2023 <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/likn/elevsvar1.png)

> [!hidden] 3.4 Spicy 2
> H2023 <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/likn/elevsvar2.png)

> [!hidden] 3.4 Spicy 5
> V2022 <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/likn/elevsvar5.png)

> [!hidden] 3.4 Spicy 6
> H2021 <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/likn/elevsvar7.png)

> [!hidden] 3.4 Spicy 7
> V2021 <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/likn/elevsvar8.png)

> [!hidden] 3.4 Spicy 9
> H2019, kun f og g <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/likn/elevsvar10.png)

> [!hidden] 3.4 Spicy 12
> V2020 <br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/likn/V2020%20(2).png)

> [!hidden] 3.4 Spicy Vurdering uke 3 
> En lærer ber elevene løse likningen
> 
> $$
> \frac{6}{\frac{2x-1}{3}+1} = \frac{3}{4}.
> $$
> 
> Læreren observerer at elevene bruker ulike strategier. Avgjør for hver av de tre stategiene i)-iii) nedenfor om den er riktig eller feil. Begrunn svaret ditt ved å beskrive hva eleven i hvert tilfelle gjør riktig eller feil.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-15-05-43.png)

> [!hidden] 3.4 Spicy Vurdering uke 4
> 
> Under ser du tre elevers løsninger av likningen $3(2x+5)=(12+3x)$. Forklar hvordan elevene kan ha tenkt. Avgjør og begrunn om løsningene er riktige.
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-15-19-12.png)

> [!hidden] 3.4 Spicy Vurdering uke 5
> 
> Noen elever på ungdomsskolen jobbet med følgende oppgave
> 
> *Henrik og André skulle lage hvert sitt sett med vurderingsoppgaver til MA-173. Henrik brukte tre dager på å lage vurderingssettet, der han jobbet like mange timer hver dag. André jobbet også like lenge hver dag som Henrik, men brukte totalt 5 dager på å bli ferdig med sitt vurderingssett. Dersom Henrik hadde brukt 7 timer lenger, og André hadde brukt 2 timer mindre, ville de begge brukt like mange timer. Hvor mange timer jobbet de med vurderingssettet hver dag?*
> 
> Under ser du tre besvarelser. Avgjør for hver av de tre stategiene (A), (B) og (C) nedenfor om den er riktig eller feil. Begrunn svaret ditt ved å beskrive hva eleven i hvert tilfelle gjør riktig eller feil.
> ![[Files/3.4 Forklare, begrunne og analysere løsningsstrategier for likninger og ulikheter.-4.png]]

> [!hidden] 3.4 Spicy Vurdering uke 6
> 
> Noen mellomtrinnselever fikk denne utfordringen: En bil, sjåfør og tilhenger veier totalt $2910 kg$. Bilen veier to ganger vekten av tilhengeren pluss vekten av sjåføren. Tilhengeren veier $900 kg$. Hvor mye veier sjåføren?
> 
> Under ser du tre elevers løsninger. Forklar hvordan de har tolket og løst oppgaven.
> 
> ![400](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-15-14-41.png)
> 
> ![400](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-15-14-45.png)  
>   
>   ![400](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-03-24-15-14-49.png)
>   

> [!hidden] 3.5 Mild 1
> Løs likningen:
> $x^{2} + 2x = 15$

> [!hidden] 3.5 Mild 2
> Løs likningen:
> 
> $x^{2} + 12x = 64$

> [!hidden] 3.5 Mild 3
> Løs likningen:
> 
> $x^{2} + 12x = - 27$

> [!hidden] 3.5 Mild 4
> Løs likningen:
> 
> $2x^{2} + 20x = 48$

> [!hidden] 3.5 Mild 5
> Løs likningen:
> 
> $x^{2} + 8x = 105$

> [!hidden] 3.5 Mild 6
> Løs likningen:
> 
> $x^{2} - 14x = - 48$

> [!hidden] 3.5 Mild Vurdering uke 5
> 
> Løs likningene med fullstendige kvadraters metode
> 1. $x^{2} + 4x = 21$
> 2. $x^{2} + 12x = 64$

> [!hidden] 3.5 Mild Vurdering uke 6
> 
> Løs likningene med fullstendige kvadraters metode
> 1. $2x^{2} + 20x = 48$
> 2. $x^{2} + 8x = 105$

> [!hidden] 3.5 Medium 1
> Løs likningene:
> 
> $\frac{10}{3} - x = x^{2}$

> [!hidden] 3.5 Medium 2
> Løs likningene:
> 
> $4x^{2} + 20x = 144$

> [!hidden] 3.5 Medium 3
> Løs likningene:
> 
> $3x^{2} - 2x = 1$

> [!hidden] 3.5 Medium 5
> Løs likningene:
> 
> $x^{2} + 5x = 14$

> [!hidden] 3.5 Medium 6
> Løs likningene:
> 
> $x^{2} - 5x = 14$

> [!hidden] 3.5 Medium Vurdering uke 5
> 
> Løs likningene med fullstendige kvadraters metode
> 1. $x^2 + 7x = -\frac{13}{4}$
> 2. $x^2-\frac{2}{3}x = 7$

> [!hidden] 3.5 Medium Vurdering uke 6
> 
> Løs likningene med fullstendige kvadraters metode
> 1. $x^2 + 5x = 6$
> 2. $x^2+\frac{2}{5}x = 11-\frac{20}{25}$

> [!hidden] 3.5 Spicy 1
> Løs likningene:
> 
> $x^{2} - 6x = 5$

> [!hidden] 3.5 Spicy 2
> Løs likningene:
> 
> $x^{2} + 5x = 2$

> [!hidden] 3.5 Spicy 3
> Løs likningene:
> 
> $x^{2} + \sqrt{2}x = 4$

> [!hidden] 3.5 Spicy 4
> Løs likningene:
> 
>  $1 + x = x^{2}$

> [!hidden] 3.5 Spicy Vurdering uke 5
> Løs likningene med fullstendige kvadraters metode
> 1. $x^2 + \sqrt 2x = 14$
> 2. $3x^2+7x = 4$

> [!hidden] 3.5 Spicy Vurdering uke 6
> 
> Løs likningene med fullstendige kvadraters metode
> 1. $x^2 + \sqrt 20x = 2$
> 2. $3x^2-9x = 2$

> [!hidden] 3.6 Mild 1
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 
> $(x+1)^2$

> [!hidden] 3.6 Mild 2
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 
> $(y-3)^2$

> [!hidden] 3.6 Mild 3
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
>  
>  $(3y+3)^2$

> [!hidden] 3.6 Mild 4
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
>  
> $(a+5)(a-5)$

> [!hidden] 3.6 Mild 5
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 
> $(x+2y)^2$

> [!hidden] 3.6 Mild 6
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 
> $(3x-2)(3x+2)$

> [!hidden] 3.6 Mild 7
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 
> $(\frac{n}{2}+8)^2$

> [!hidden] 3.6 Mild 8
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 
> $(\frac{2x}{3}+\frac{3}{2})(\frac{2x}{3}-\frac{3}{2})$

> [!hidden] 3.6 Mild 9
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 
> $(3xy-\frac{5}{2}x)^2$

> [!hidden] 3.6 Mild Vurdering uke 5
> 
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning
> 1. $(x+1)^2$
> 2. $(x-y)^2$
> 3. $(4xy + 5)(5-4xy)$

> [!hidden] 3.6 Mild Vurdering uke 6
> 
> Regn ut (løs opp parentesene) ved hjelp av passende kvadratsetning.
> 1. $(x-1)^2$
> 2. $(z-4)^2$
> 3. $(2y+3)^2$

> [!hidden] 3.6 Medium 1
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $x^2-9$

> [!hidden] 3.6 Medium 2
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $16-y^2$

> [!hidden] 3.6 Medium 3
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $9+x^2+6x$

> [!hidden] 3.6 Medium 4
> 
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $16-8k+k^2$

> [!hidden] 3.6 Medium 5
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $4k^2+16-16k$

> [!hidden] 3.6 Medium 6
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $25y^2-16x^2$

> [!hidden] 3.6 Medium 7
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $25n^2+4+20n$

> [!hidden] 3.6 Medium 8
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $x^2+2ax+a^2$

> [!hidden] 3.6 Medium 9
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> $x^2-6ax+9a^2$

> [!hidden] 3.6 Medium 10
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $4a^2+9b^2-12ab$

> [!hidden] 3.6 Medium 11
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $y^2+4y+4$

> [!hidden] 3.6 Medium 12
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $4n^2-1$

> [!hidden] 3.6 Medium Vurdering uke 5
> 
> Faktoriser uttrykkene under ved hjelp av passende kvadratsetning
> 1. $36x^2+4+24x$
> 2. $25-m^2$
> 3. $16-8y+y^2$

> [!hidden] 3.6 Medium Vurdering uke 6
>  
>  Faktoriser uttrykkene under ved hjelp av passende kvadratsetning
>  1. $36-x^2$
>  2. $16+x^2-8x$
>  3. $1-8k+16k^2$

> [!hidden] 3.6 Spicy 1
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $4(4x^2 - b^2)$,

> [!hidden] 3.6 Spicy 2
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $9x^2 4y^2 +1 - 12xy$,

> [!hidden] 3.6 Spicy 3
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $10x^2 + 3(2x^2-y(8x-3y))$,

> [!hidden] 3.6 Spicy 4
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $x^4-9y^2$

> [!hidden] 3.6 Spicy 5
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $3x(\frac{3}{4}x+4y)+2^4y^2$

> [!hidden] 3.6 Spicy 6
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $\frac{1}{4}x^2y^2-5x(xy-5x)$

> [!hidden] 3.6 Spicy 7
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $b^2(9+a(\frac{a}{9}+2))$

> [!hidden] 3.6 Spicy 8
> Faktoriser uttrykket under ved hjelp av passende kvadratsetning
> 
> $5(x(\frac{5}{4}x-y)+y(x-\frac{4}{5}y))$

> [!hidden] 3.6 Spicy 9
> Uttrykket under mangler et ledd for å bli et fullstendig kvadrat. Lag fullstendige kvadrater av uttrykket.
> 
> $x^2+6x$

> [!hidden] 3.6 Spicy 10
> Uttrykket under mangler et ledd for å bli et fullstendig kvadrat. Lag fullstendige kvadrater av uttrykket.
> 
> $x^2+25$

> [!hidden] 3.6 Spicy 11
> Uttrykket under mangler et ledd for å bli et fullstendig kvadrat. Lag fullstendige kvadrater av uttrykket.
> 
> $7(7-2a)$

> [!hidden] 3.6 Spicy 12
> Uttrykket under mangler et ledd for å bli et fullstendig kvadrat. Lag fullstendige kvadrater av uttrykket.
> 
> $-4y+1$

> [!hidden] 3.6 Spicy 13
> Uttrykket under mangler et ledd for å bli et fullstendig kvadrat. Lag fullstendige kvadrater av uttrykket.
> 
> $x(xy^2+6y)$

> [!hidden] 3.6 Spicy 14
> Uttrykket under mangler et ledd for å bli et fullstendig kvadrat. Lag fullstendige kvadrater av uttrykk.
> 
> $a(x+a)$

> [!hidden] 3.6 Spicy Vurdering uke 5
> 1. Faktoriser uttrykket under ved hjelp av passende kvadratsetning 
> $$
> 5z^2 + 2(10z^2-y(10z-2y)).
> $$
> 2. Faktoriser uttrykket under 
> $$
> 3x(\frac{3}{4}x+4y)+2^4y^2
> $$
> 3. Ved å legge til et tall til $z^2 - \sqrt 2z$ så kan vi lage et fullstendig kvadrat. Legg til et tall og faktoriser uttrykket til et fullstendig kvadrat.

> [!hidden] 3.6 Spicy Vurdering uke 6
> 
> Faktoriser uttrykkene under ved hjelp av passende kvadratsetning
> 1. $x^4-9y^2$
> 2. $5(x(\frac{5}{4}x-y)+y(x-\frac{4}{5}y))$
> 
> Uttrykkene under mangler et ledd for å bli et fullstendig kvadrat. Lag fullstendige kvadrater av uttrykkene (noen kan ha to løsninger).
> 1. $x(xy^2+6y)$
> 2. $a(x+a)$

> [!hidden] 3.7 Medium 1
> Illustrer de tre kvadratsetningene, med tilhørende forklaring, slik at det går tydelig frem at de stemmer (for positive tall).

> [!hidden] 3.8 Mild 1
> Forklar begrepene *størrelse, måltall og måleenhet* ved å gi et 1-dimensjonalt eksempel.

> [!hidden] 3.8 Mild 2
> Forklar begrepene *størrelse, måltall og måleenhet* ved å gi et 2-dimensjonalt eksempel.

> [!hidden] 3.8 Mild 3
> 
> Forklar begrepene *størrelse, måltall og måleenhet* ved å gi et 3-dimensjonalt eksempel.

> [!hidden] 3.8 Medium 1
> Ved å bruke begrepene *størrelse, måltall og måleenhet*, forklar hva det vil si at
> 1. figuren under har areal $3m^2$
> 2. figuren under har areal $16cm^2$
> 3. figuren under har volum $28cm^3$
> 4. figuren under har areal $3,\!5m^2$
> 5. figuren under har areal $13,3cm^2$
> 6. figuren under har volum $28,8cm^3$
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/d212e07743cf745d709cae90791078f352200517/img/likn/figurergeo.drawio.svg)

> [!hidden] 3.9 Mild 1
> Ved hjelp av en illustrasjon, gjengi formlene for arealet av et rektangel.
> 
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.9 Mild 2
> Ved hjelp av en illustrasjon, gjengi formlene for arealet av et parallellogram.
> 
> 
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.9 Mild 3
> Ved hjelp av en illustrasjon, gjengi formlene for arealet av en trekant.
> 
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.9 Mild 4
> Ved hjelp av en illustrasjon, gjengi formlene for arealet av et trapes.
> 
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.9 Medium 1
> Ved hjelp av en illustrasjon, forklar formlene for arealet av et rektangel

> [!hidden] 3.9 Medium 2
> Ved hjelp av en illustrasjon, forklar formlene for arealet av  et parallellogram

> [!hidden] 3.9 Medium 3
> Ved hjelp av en illustrasjon, forklar formlene for arealet av en trekant

> [!hidden] 3.9 Medium 4
> Ved hjelp av en illustrasjon, forklar formlene for arealet av et trapes

> [!hidden] 3.10 Mild 1
> Ved hjelp av en illustrasjon, gjengi formelen for arealet av en sirkel.
> 
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.10 Medium 1
> Ved hjelp av en illustrasjon, forklar formelen for arealet av en sirkel.
> 
> Det må komme tydelig hvorfor formlene er riktige i forklaringen.

> [!hidden] 3.11 Mild 1
> Ved hjelp av en illustrasjon, gjengi formlene for volumet av et rett prisme.
>  
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.11 Mild 2
> Ved hjelp av en illustrasjon, gjengi formlene for volumet av et skjevt prisme.
>  
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.11 Mild 3
> Ved hjelp av en illustrasjon, gjengi formlene for volumet av prismer med trekantede grunnflater.
>  
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.11 Mild 4
> Ved hjelp av en illustrasjon, gjengi formlene for volumet av en sylinder.
> 
>  
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.11 Mild 5
> Ved hjelp av en illustrasjon, gjengi formlene for volumet av en pyramide.
>  
> Det må komme tydelig frem hvordan de ulike parameterne er koblet til bildet.

> [!hidden] 3.11 Medium 1
> Ved hjelp av en illustrasjon, forklar formlene for volumet av et rett prisme

> [!hidden] 3.11 Medium 2
> Ved hjelp av en illustrasjon, forklar formlene for volumet av et skjevt prisme

> [!hidden] 3.11 Medium 3
> Ved hjelp av en illustrasjon, forklar formlene for volumet av prismer med trekantede grunnflater

> [!hidden] 3.11 Medium 4
> Ved hjelp av en illustrasjon, forklar formlene for volumet av en sylinder

> [!hidden] 3.11 Medium 5
> Ved hjelp av en illustrasjon, forklar formlene for volumet av en pyramide

> [!hidden] 3.12 Medium 1
>  Hvis et trapes har areal $A$. Forklar ved hjelp av formelen til et trapes hvorfor arealet til trapeset blir $\frac{49}{9}A$ hvis vi forstørrer lengdene i trapeset med $\frac{7}{3}$.

> [!hidden] 3.12 Medium 2
> Under ser du en figur i grønt. Figuren er laget ved å ta et kvadrat med sidelengde $2r$ og trekke vekk sirkelsektorer med radius $r$. Til slutt er det lagt på en sirkel med radius $r$ og sentrum i det ene hjørnet av kvadratet. Hva er arealet til figuren?<br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/f4fe054ae1e8c41496c2d12d5af365a7a2f5b3d1/img/geo/figur3.svg)

> [!hidden] 3.12 Medium 3
> Under ser du et område som opprinnelig var et kvadrat med sidelengde $x$. Det er trukket fra tre halvsirkler fra kvadratet. Hva er det gjenværende arealet?<br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/f4fe054ae1e8c41496c2d12d5af365a7a2f5b3d1/img/geo/figur2.svg)

> [!hidden] 3.12 Spicy 1
> Arkene i A-formatet (A1, A2, A3, A4, A5, osv) har den egenskapen at når du halverer de ved å brette de på langsiden, så vil de bevare forholdet mellom sidelengdene. Det vil si at hvis sidelengdene i A4 er *a* og *b,* så er i A5 *b/2* og *a* og forholdet mellom sidelengdene vil være like. Vis at dette forholdet, vil være $\sqrt 2$.

> [!hidden] 3.12 Spicy 2
> Hvor stor er summen av de små omkretsene i forhold til den store i figuren under?<br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/geo/image3.png)

> [!hidden] 3.12 Spicy 3
> Under ser du en figur som er laget av sirkelsektorer og trekanter. Figuren er lagd ved å dele sirkelen med sentrum i $A$ inn i seks like deler $B$, $C$, $D$, $E$, $F$ og $G$. Sirkelen har radius $r$.
> 1. Avgjør og begrunn hva omkretsen av figuren er
> 2. Avgjør arealet av figuren.<br>![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/2023-04-25-13-59-55.png)

> [!hidden] 3.13 Mild 1
> Forenkle uttrykket $6z-2-2z + 4$.

> [!hidden] 3.13 Mild 2
> Hvis at $4x(x+1)+5x -2x(2x+3)$ kan skrives som $3x$.

> [!hidden] 3.13 Mild 3
> Regn ut $10 + 2(5y-5)$.

> [!hidden] 3.13 Mild 4
> Forenkle uttrykket 
> $$
> \frac{1}{2x-2}\cdot \frac{4x-4}{3}.
> $$

> [!hidden] 3.13 Mild 5
> Forenkle uttrykket 
> $$
> 2n(n+1)+\frac{(n+1)(2n+4)}{2}.
> $$

> [!hidden] 3.13 Mild 6
> Forenkle uttrykket
> $$
> 4x(x+9)-2x(2x+3)
> $$

> [!hidden] 3.13 Mild 7
> Forenkle uttrykket
> $$
> \frac{8}{3x-3}\cdot\frac{9x+9}{4}
> $$

> [!hidden] 3.13 Mild 8
> Faktoriser uttrykket
> $$
> 2t(t+2)+ \frac{3(t+2)}{2}
> $$

> [!hidden] 3.13 Mild 9
> Forenkle uttrykket
> $$
> \frac{5n^2-3n}{2} - \frac{5(n-1)^2-3(n-1)}{2}
> $$

> [!hidden] 3.13 Mild 10
> Forenkle uttrykket
> $$
> n^2-(n-1)^2+\frac{n(n+1)}{2}-\frac{n(n-1)}{2}
> $$

> [!hidden] 3.13 Mild Nokut H24
> ![[Files/3.13 Utføre formell omforming av algebraiske uttrykk..png]]

> [!hidden] 3.13 Mild Vurdering uke 5
> 1. Regn ut $8(2k+1+3k)$.
> 2. Forenkle uttrykket $$\frac{4h-h+2}{3h} - \frac{2}{3}h$$

> [!hidden] 3.13 Mild Vurdering uke 6
> 1. Regn ut $15 + 4(5y-10)$.
> 2. Forenkle uttrykket
> $$
> \frac{1}{x-1}\cdot \frac{8x-8}{8}.
> $$

> [!hidden] 3.13 Medium 0
> Forenkle uttrykket
> $$
> { \frac{1}{1-\frac{1}{n+1}} }- \frac{1}{n}
> $$

> [!hidden] 3.13 Medium 1
> Forenkle uttrykket 
> $$
> \frac{1}{x-1+\frac{1}{x+1}}- \frac{1}{x}
> $$

> [!hidden] 3.13 Medium 1.1
> Forenkle uttrykket
> $$
> \frac{2n+1}{1+\frac{n}{n+1}}
> $$

> [!hidden] 3.13 Medium 2
> Forenkle uttrykket 
> 
> $\displaystyle2\cdot \frac{ \frac{2h-5}{(h+7)(h-8)}}{\frac{4h-10}{h-8}}$

> [!hidden] 3.13 Medium 3
> Forenkle uttrykket
> $$
> 2n(n+1)-1+ \frac{(n+1)^2}{3}+{ \frac{n+1}{1-\frac{1}{n+2}} }
> $$

> [!hidden] 3.13 Medium 4
> Forenkle uttrykket
> $$
> 3n(n+1)-1+{ \frac{n+1}{1-\frac{1}{n+2}} }
> $$

> [!hidden] 3.13 Medium 5
> Forenkle uttrykket
> $$
> \frac{1}{x-1-\frac{x^2}{x+1}}
> $$

> [!hidden] 3.13 Medium Vurdering uke 5
> 1. Vis at $z^2 + 10^2  = (10+y)^2$ kan omformes til $z^2 = y^2 + 20y$.
> 2. Forenkle uttrykket $x^2 + 3h+ 6x + 3(h^2+x^2) - \frac{6h^2+12x^2}{2} + \frac{12x^2-18h}{6}$

> [!hidden] 3.13 Medium Vurdering uke 6
> 1. Vis at $(a+x-b)h-\frac{(a+x-b)h}{2} - \frac{xh}{2}$ kan omformes til $\frac{(a+b) h}{2}.$
> 2. Forenkle uttrykket 
> $$
> \frac{\frac{3a-9b}{a^2-ab}}{\frac{(a-3b)}{a(a-b)(a+b)}}
> $$

> [!hidden] 3.13 Spicy 1
> Hvilket av uttrykkene har ikke samme verdi som de andre?
> 1. $(1+\sqrt 2)^2$
> 2. $\sqrt 8 + \sqrt 9$
> 3. $\frac{1+\sqrt2}{\sqrt 2 - 1}$
> 4. $3+2\sqrt 2$
> 5. $\frac{\sqrt 2 + 9}{2-\sqrt 2}$

> [!hidden] 3.13 Spicy 2
> Forenkle uttrykket 
> $$
> \begin{align*} \frac{\bigg(\dfrac{z^2-16}{z^2+z-12}\bigg)}{\Bigg(\dfrac{z+4}{z(3-\frac{9}{z})}\Bigg)}  \end{align*}
> $$ 

> [!hidden] 3.13 Spicy 3
> Uttrykket $x^3 + x^2 y + 3 x^2 + 3 x y^2 + 7 x y + 3 y^3 + 4 y^2$ har $(x+y)$ som en faktor. Faktoriser ut $(x+y)$ fra uttrykket. 

> [!hidden] 3.13 Spicy 3.5
> Forenkle uttrykket
> $$
>  3z(z+1)+ \frac{9z^2+18z+9}{3z+3}+{ \frac{(z-2)(z+1)}{\left( 1-\frac{1}{z+2}  \right)(z^2-4) } }+z
> $$

> [!hidden] 3.13 Spicy 4
> Vis at $(pq-1)(pr-1)(rq-1)-(pr+pq+rq) = (pqr)^2$ kan omformes til $\frac{1}{pr}+\frac{1}{pq}+\frac{1}{qr} = -1$.

> [!hidden] 3.13 Spicy 5
> Forenkle uttrykket
> $$
> 2n(n+1)+ \frac{n^2+2n+1}{3}+\frac{(n-2)(n+1)}{(1-\frac{1}{n+2} )(n^2-4) }
> $$

> [!hidden] 3.13 Spicy Vurdering uke 5
> 1. Vis at brøken $\frac{2(\sqrt 2 + \sqrt 6)}{3(\sqrt{2+\sqrt 3})}$ kan omformes til $\frac{4}{3}$.
> 2. Forenkle uttrykket 
> $$
> \frac{ \frac{(2y-5)(y+2)}{y^2-y-6}}{\frac{(4y-10)(y+3)}{y^2-9}}
> $$
>  til $\frac{1}{2}$.

> [!hidden] 3.13 Spicy Vurdering uke 6
> 1. Forenkle brøken $\dfrac{\frac{x^2+5x+4}{x+4}}{\frac{x^2+x}{x^2}}$.
> 2. Faktoriser ut $n+2$ fra uttrykket $(n+2)n+\frac{(n+2)}{2}n+\frac{3(n+2)(n+1)}{2}$ og forenkle uttrykket.
> 3. 
> $$
> 3y(y+2)+ \frac{3y^2+12y+12}{3y+6}+{ \frac{(y-2)(y+3)}{\left( 1+\frac{1}{y+2}  \right)(y^2-4) } }+y+1
> $$

> [!hidden] 3.14 Medium Nokut V24
> ![[Files/3.14 Tolke algebraiske uttrykk geometrisk, med ord og kontekst.-9.png]]

> [!hidden] 3.14 Medium Nokut H24
> ![[Files/H24.png]]

> [!hidden] 3.14 Medium Nokut H24
> ![[Files/H24 6.png]]

> [!hidden] 3.14 Medium Nokut V24
> ![[Files/3.14 Tolke algebraiske uttrykk geometrisk, med ord og kontekst.-11.png]]

> [!hidden] 3.14 Medium Nokut H23
> ![[Files/H23nokut.png]]

> [!hidden] 3.14 Medium Nokut V23
> ![[Files/nokutv23.png]]

> [!hidden] 3.14 Medium Nokut V23
> ![[Files/Nokutv3.png]]

> [!hidden] 3.14 Medium Nokut H21
> ![[Files/3.14 Tolke algebraiske uttrykk geometrisk, med ord og kontekst.-6.png]]

> [!hidden] 3.14 Medium Nokut H21
> ![[Files/3.14 Tolke algebraiske uttrykk geometrisk, med ord og kontekst.-7.png]]

> [!hidden] 3.14 Medium H21
> ![[Files/3.14 Tolke algebraiske uttrykk geometrisk, med ord og kontekst.-8.png]]

> [!hidden] 3.14 Medium Vurdering uke 5
> 1. Henrik på 9. trinn sier til læreren at han har oppdaget en lur måte å regne på som alltid gir 4 i svar. Han forteller: *Jeg tar tre påfølgende tall med to i avstand, for eksempel 6, 8 og 10. Da kan jeg regne slik*<br> $$\begin{aligned} 8\cdot 8 -6\cdot 10 = 4.  \end{aligned}$$ *Hvis jeg prøver tre andre tall, for eksempel 3, 5 og 7 får jeg*<br> $$\begin{aligned} 5\cdot 5 - 3\cdot 7 = 4.  \end{aligned}$$ *Det ser ut til å bli fire, uansett hvilke tre påfølgende tall med to i avstand jeg tar. Men jeg skjønner ikke hvorfor det blir slik.* <br><br>Vis algebraisk den sammenhengen som Henrik har oppdaget.
> 2. Tar du halvparten av alderen til André og legger til fire, så får du halvparten av alderen til Henrik. 
>     1. Skriv et algebraisk uttrykk som beskriver Henrik sin alder ved hjelp av alderen til André. Merk, besvarelsen må definere variabelen du bruker. 
>     2. Endre teksten til oppgaven over slik at svaret blir $\frac{2x+10}{3}$

> [!hidden] 3.14 Medium Vurdering uke 6
> 
> Peder i 10. trinn ber deg tenke på et tall. Legg til 5 og gang tallet du fikk med 4. Trekk fra 16 og del svaret ditt på 2. Multipliser tallet du nå har med 3. Trekk fra det dobbelte av tallet du opprinnelig valgte og trekk fra 15.
> 1. Vis algebraisk en generell sammenheng mellom det tallet en velger og det svaret en får.
> 2. Lag en *tenk på et tall*-oppgave til elever på 6. trinn hvor elevene må bruke alle de fire regneartene og der alle elevene får samme tall som svar. Vis algebraisk at oppgaven fører til at alle elevene får 13 som svar.

> [!hidden] 3.15 Medium NOKUT H24
> ![[Files/NokutH2411.png]]

> [!hidden] 3.15 Medium Nokut V24
> ![[Files/V24Nokut.png]]

> [!hidden] 3.15 Medium Nokut V23
> ![[Files/Pasted image 20250124114059.png]]

> [!hidden] 3.15 Medium Nokut H22
> ![[Files/3.15 Analysere elevers arbeid med algebraiske uttrykk.-4.png]]

> [!hidden] 3.15 Medium Nokut V22
> ![[Files/3.15 Analysere elevers arbeid med algebraiske uttrykk.-5.png]]

> [!hidden] 3.15 Medium Nokut
> ![[Files/3.15 Analysere elevers arbeid med algebraiske uttrykk.-6.png]]

> [!hidden] 3.15 Medium Nokut H21
> ![[Files/3.15 Analysere elevers arbeid med algebraiske uttrykk.-9.png]]

> [!hidden] 3.15 Medium Vurdering uke 5
> 1. André i 8. trinn regnet som vist nedenfor. Beskriv en feiltenkning som kan ligge bak Andrés løsning. Erstatt tallene 6 og 8 med variablene $x$ og $y$, og begrunn algebraisk at oppgaven (generelt sett) er løst feil. 
>  $$
> \begin{aligned} \sqrt{6^2+8^2} = 6+8 = 14.  \end{aligned}
> $$
> 1. For å undersøke elevenes forståelse av prioriteringsreglene for matematiske operasjoner ga læreren fire oppgaver. Eleven Henrik kom fram til følgende (svarene er skrevet i rødt)
>     1. $3\cdot 5 : 3 + 2\phantom = \color{red}{ = 3}$
>     2. $10-3 + 14 : 7 \phantom = \color{red}{= 3}$
>     3. $3\cdot 6 + 3 -2 \phantom = \color{red}{= 21}$
>     4. $6\cdot 2+3: 2+1 \phantom = \color{red}{= 10}$<br>Avgjør om svaret på hver oppgave 1.-4. er riktig eller feil, og beskriv hvordan eleven kan ha tenkt. 

> [!hidden] 3.15 Medium Vurder uke 6
> En lærer ber elevene forenkle uttrykket 
> $$
> \frac{6}{\frac{2x-1}{3}+1}.
> $$
>  
> - Elevene André gjør følgende
> $$
> \begin{aligned} \frac{\cancel{6}^2}{\frac{2x-1}{\cancel3}+1} = \frac{2}{2x-1+1} = \frac{\cancel2}{\cancel2x} = \frac{1}{x} \end{aligned}
> $$
> - og Henrik gjør følgende forenklinger
> $$
> \begin{aligned} \frac{3\cdot6}{\cancel3(\frac{2x-1}{\cancel3}+1)}  = \frac{18}{2x-1+1} = \frac{\cancel{18}^9}{\cancel2x}= \frac{9}{x}\end{aligned}
> $$
> 
> 1. Avgjør for hver besvarelse hva elevene har gjort riktig og galt.
> 2. Vis hvordan du selv ville forenklet uttrykket.
> 3. Noen elever diskuterer hvilket av uttrykkene $-x+2$ og $2x-4$ som er størst. Begrunn for hver påstand om den er riktig eller feil.
> 
> *Henrik*: Så lenge $x$ er positiv vil $2x-4$ være størst.
> 
> *André*: Hvis $x$ er 5 i $2x-4$ og $x$ er -4 i $-x+2$ så er uttrykkene like store.
> 
> *Anders*: $2x$ er positiv og $2x-4$ vil derfor alltid være størst.
> 
> *Ingvald*: Det kommer an på verdien til $x$.

> [!hidden] 4.1 Mild 1
> Forklar kort, og gi eksempler på hver av de additive strukturene *økning, komplettering, forening, sammenlikning* og *oppheving av minskning*. 

> [!hidden] 4.1 Mild 2
> Forklar kort, og gi eksempler på tilsvarende strukturer for subtraksjon. 

> [!hidden] 4.1 Mild Vurdering uke 4
> 1. Beskriv tre situasjoner som har addisjon som modell med henholdsvis økning, forening og additiv sammenlikning som struktur.
> 2. Velg én av situasjonene over. Omformuler den slik at det er rimelig å si at den har samme struktur, men med subtraksjon som modell.

> [!hidden] 4.1 Mild Vurdering uke 5
> 1. Beskriv tre situasjoner som har addisjon som modell med henholdsvis økning, forening og additiv sammenlikning som struktur.
> 2. Velg én av situasjonene over. Omformuler den slik at det er rimelig å si at den har samme struktur, men med subtraksjon som modell.

> [!hidden] 4.1 Mild Vurdering uke 6
> 1. Beskriv tre situasjoner som har addisjon som modell med henholdsvis økning, forening og additiv sammenlikning som struktur.
> 2. Velg én av situasjonene over. Omformuler den slik at det er rimelig å si at den har samme struktur, men med subtraksjon som modell.

> [!hidden] 4.1 Medium 1
> Avgjør hvilken additiv struktur situasjonene svarer til. Spesifiser også hva som er ukjent der det er relevant. Merk at én og samme situasjon kan tolkes både som addisjon og subtraksjon.
>    1. Arne hadde litt penger i lommeboka. Han samler og panter flasker for 167 kroner. Nå har han 527 kroner. Hvor mye hadde han fra før?
>    2. I bilen på vei til butikken for å pante, satte Arne opp farta med 12 km/t til 73 km/t. Hvor høy fart holdt han før fartsøkninga?
>    3. Forrige gang Arne pantet, fikk han 234 kroner. Hvor mye mer var det enn denne gang?
>    4. For å få råd til egen pantemaskin, mangler Arne 12 364 kroner. Hvor mye koster en pantemaskin?
>    5. Arne innser at prosjekt «egen pantemaskin» ikke lar seg gjennomføre uten hjelp. Han slår seg sammen med Anne. De har til sammen 9 530. Hvor mange penger har Anne?
>    6. Etter en tids hardt innsamlingsarbeid, kjøper Arne og Anne omsider en pantemaskin. De sitter da igjen med 421 kroner. Hvor mye penger hadde før de kjøpte maskinen?

> [!hidden] 4.1 Medium Vurdering uke 4
>
> 1. I hver situasjon under, argumenter for to additive strukturer det er rimelig å si at situasjonen er et eksempel på. Oppgi i hvert tilfelle addisjons- eller subtraksjonsstykket som passer.
>     1. Henrik hiver to dartpiler. Første pil treffer $18$, andre pil $17$. Hvor mange poeng fikk han?  
>     2. André samler enhjørning-klistremerker. En pakke klistremerker koster $349$, men stakkars André har bare $200$ kroner. Hvor mye mer trenger han for å få råd?
> 2. Lag en oppgave til $150 + {\_\_} =225$ med additiv sammenlikning som struktur.

> [!hidden] 4.1 Medium Vurdering uke 5
> Avgjør og begrunn hvilken additiv struktur situasjonene har. Tolk både med addisjon og subtraksjon som modell.
> 1. På en uke har en plante vokst seg 21 cm lengre til 93 cm. Hvor lang var den for en uke siden?
> 2. André hadde 12 kroner i lomma. Da han fant noen penger bakken, hadde han 19 kroner. Hvor mye fant han?
> 3. Henrik har to samlinger med Pokémon-kort, én med sjeldne og én med vanlige kort. Han har totalt 497 kort, hvorav de vanlige utgjør 354. Hvor mange sjeldne kort har Henrik?

> [!hidden] 4.1 Medium Vurdering uke 6
> 
> Avgjør og begrunn hvilken additiv struktur situasjonene har. Angi både addisjons- og subtraksjonsstykket som passer i hvert tilfelle.
> 1. På en uke har en solsikke inntil husveggen vokst til 212 cm. Hvor mange centimeter må den vokse før den når husveggen på 240 cm?
> 2. André fant 12 kroner i bukselomma. I jakkelomma fant han 50. Hvor mye mer fant han i jakka?
> 3. Studentene må lese to pensumbøker med til sammen 643 sider. Den ene boka er på 425 sider. Hvor mange sider har den andre?

> [!hidden] 4.2 Mild 1
> Forklar kort, og gi eksempler på hver av de multiplikative strukturene *like grupper, rate, sammenlikning, kombinatorisk situasjon* og *rektangulært arrangement*. 

> [!hidden] 4.2 Mild 2
> Forklar kort, og gi eksempler på *delingsdivisjon* og *målingsdivisjon*. 

> [!hidden] 4.2 Mild Vurdering uke 4
> 1. Forklar kort, og gi eksempler på hver av de multiplikative strukturene *like grupper, rate, sammenlikning, kombinatorisk situasjon* og *rektangulært arrangement*.
> 2. Forklar kort, og gi eksempler på *delingsdivisjon* og *målingsdivisjon*.

> [!hidden] 4.2 Mild Vurdering uke 5
> 1. Forklar kort, og gi eksempler på hver av de multiplikative strukturene _like grupper, rate, sammenlikning, kombinatorisk situasjon_ og _rektangulært arrangement_.
> 2. Forklar kort, og gi eksempler på _delingsdivisjon_ og _målingsdivisjon_.

> [!hidden] 4.2 Mild Vurdering uke 6
> 1. Forklar kort, og gi eksempler på hver av de multiplikative strukturene *like grupper, rate, sammenlikning, kombinatorisk situasjon* og *rektangulært arrangement*.
> 2. Forklar kort, og gi eksempler på *delingsdivisjon* og *målingsdivisjon*.

> [!hidden] 4.2 Medium 
> Avgjør hvilken multiplikativ struktur situasjonene svarer til. Spesifiser også hva som er ukjent der det er relevant. Merk at én og samme situasjon kan tolkes både som multiplikasjon og divisjon.
> 1. Arne rydder i flaskesamlinga si for lettere å kunne telle over hvor mange panteflasker han har. Han fyller 12 bæreposer, alle med 13 flasker. Hvor mange flasker har Arne?
> 2. Anne, som konsekvent bidrar betydelig mer enn Arne i deres felles prosjekter, har 624 flasker. Hvor mange flere har hun i forhold til Arne?
> 3. Med 3 kroner i pant per flaske, hvor mye hanker de inn når de panter flaskene sine?
> 4. Hensikten med pantingen denne gangen, er å kjøpe garn for å strikke et rektangulært teppe. (Teppet skal ligge foran den nye panteautomaten deres for å hindre søl på gulvet.) Teppet skal ha et areal på 3,2 m2 og være to meter den ene veien. Hvor langt skal det være den andre veien?
> 5. Arne og Anne er estetisk bevisste og ønsker å lage et dekorativt, stripet teppe i to farger. I garnbutikken selger de garn i fem ulike farger. Hvor mange tepper kan de velge å strikke?
> 6. Etter å ha betalt for garnet, hadde Arne og Anne 164 kroner igjen som de fordeler likt mellom seg. Hvor mye får hver?
> 7. Hver fargestripe måler fem centimeter nedover den lengste sida. Hvor mange striper har teppet?

> [!hidden] 4.2 Medium Vurdering uke 4
> 1. Avgjør og begrunn hvilken multiplikativ struktur situasjonene svarer til.
>     1.  Antall Twist André spiser på $6,5$ minutter når han spiser $12$ Twist i minuttet.
>     2. Arealet av en rektangulær terrasse med sider $2,3$ og $4,7$ meter.
>     3. En strekning på $12 \ \text{km}$ er delt opp i $4$ etapper.  
> 2. Ta utgangspunkt i situasjon c. Legg til nødvendig informasjon, og omformuler på to måter: slik at du lager én divisjonsoppgave med målingsdivisjon og én med delingsdivisjon. Begrunn hvilken som er hva.  

> [!hidden] 4.2 Medium Vurdering uke 5
> Avgjør og begrunn hvilken multiplikativ struktur situasjonene svarer til.
> 1. Prisen du betaler for parkering når satsen er kr per time.
> 2. Skolens ballbane er tre ganger lengre enn den er bred.
> 3. Antall liter yoghurt på et brett med beger, når hvert beger inneholder liter.
> 
> Ta utgangspunkt i situasjon c. Legg til nødvendig informasjon, og omformuler på to måter: slik at du lager én divisjonsoppgave med målingsdivisjon og én med delingsdivisjon. Begrunn hvilken som er hva.

> [!hidden] 4.2 Medium Vurdering uke 6
> 1. Avgjør og begrunn hvilken multiplikativ struktur situasjonene svarer til.
>     1. En flaske ligger opp ned i sekken og lekker 4 ml i minuttet.
>     2. Antall gir på en sykkel med tre tannhjul fremme og åtte bak.
>     3. Solas diameter er 109 ganger jordas.
> 2. Ta utgangspunkt i situasjon 1. Legg til nødvendig informasjon, og omformuler på to måter: slik at du lager én divisjonsoppgave med målingsdivisjon og én med delingsdivisjon. Begrunn hvilken som er hva.

> [!hidden] 4.3 Mild 1
> Forklar kort, og gi eksempler på kommutativ og assosiativ egenskap for 
> 1. addisjon
> 2. multiplikasjon 

> [!hidden] 4.3 Mild Vurdering
> 1. Forklar kort, og gi eksempler på kommutativ og assosiativ egenskap for
>     1. addisjon
>     2. multiplikasjon
> 2. Forklar kort og gi et eksempel på distributiv egenskap

> [!hidden] 4.3 Mild Vurdering uke 5
> 1. Forklar kort, og gi eksempler på kommutativ og assosiativ egenskap for
>     1. addisjon
>     2. multiplikasjon
> 2. Forklar kort og gi et eksempel på distributiv egenskap

> [!hidden] 4.3 Medium 1
> Lag illustrasjoner som viser at egenskapene gjelder.

> [!hidden] 4.3 Medium Vurdering uke 4
> Lag illustrasjoner med tilhørende forklaring som viser
> 1. at addisjon er kommutativt
> 2. at multiplikasjon er kommutativt
> 3. at den distributive egenskap gjelder

> [!hidden] 4.3 Medium Vurdering uke 5
> Lag illustrasjoner med tilhørende forklaring som viser
> 1. at addisjon er kommutativt
> 2. at multiplikasjon er kommutativt
> 3. at den distributive egenskap gjelder

> [!hidden] 4.4 Mild 1
>  Gjør beregningene ved hjelp av strategier (som ikke er oppstilt regning).
>   1. $126-311$
>   2. $126+37$
>   3. $136:8$
>   4. $461:20$
>   5. $34\cdot160$
>   6. $17\cdot 19$

> [!hidden] 4.4 Mild 2
> Vis hvordan én eller flere av de tre egenskapene (kommutativitet, assosiativitet og distributivitet) kan brukes som regnestrategier.
> 1. $12\cdot 26$
> 2. $376+39$
> 3. $14\cdot 7$
> 4. $113\cdot 6$
> 5. $15\cdot 8 + 30$
> 6. $\frac{5}{4}\cdot 120$

> [!hidden] 4.4 Mild Vurdering uke 4
> 
> Vis hvordan én eller flere av de tre egenskapene (kommutativitet, assosiativitet og distributivitet) kan brukes som regnestrategier.
> 1. $15\cdot 8$
> 2. $20\cdot 13$
> 3. $5\cdot (13 \cdot 2)$

> [!hidden] 4.4 Mild Vurdering uke 5
> Vis hvordan én eller flere av de tre egenskapene (kommutativitet, assosiativitet og distributivitet) kan brukes som regnestrategier.
> 1. $121\cdot 6$
> 2. $13\cdot 7 + 3\cdot 13$
> 3. $\dfrac{5}{4}\cdot 120$

> [!hidden] 4.4 Mild Vurdering uke 6
> 
> Gjør beregninger ved hjelp av strategier som ikke er oppstilt regning. Pek på hvilke strategier du bruker
> 1. $365 : 5$
> 2. $102\cdot 49$
> 3. $60\cdot 333$
> 4. $7881:111$

> [!hidden] 4.4 Medium 1
> Gjør oppgavene fra middels. Begrunn, og dersom hensiktsmessig, illustrer strategien slik at det går tydelig frem at den alltid funker.

> [!hidden] 4.4 Medium 2
> Fra Nasjonal deleksamen 30.11.22: 
> 
> ![](https://raw.githubusercontent.com/Andremartiny/MA-173/main/img/tall/image1.png)

> [!hidden] 4.4 Medium Vurdering uke 4
> 1. Bruk multiplikasjonen $5 \cdot 8$ til å illustrere og gi en kort forklaring av distributiv egenskap.
> 2. Gjør beregningene under ved hjelp av regnestrategier som ikke innebærer oppstilt regning. Vis tydelig hvordan du tenker.
> 3. Velg én av strategiene fra 2., og gi en illustrasjon og kort forklaring som viser at strategien alltid funker.
>     -  $240 : 20$
>     -  $160 \cdot \frac{3}{4}$

> [!hidden] 4.4 Medium Vurdering uke 5
> 1. Velg to passende multiplikasjoner. Illustrer og gi en kort forklaring av distributiv egenskap og kommutativ egenskap.
> 2. Gjør beregningene under ved hjelp av regnestrategier som ikke innebærer oppstilt regning. Vis tydelig hvordan du tenker.
>     1. $73 - 54$
>     2. $96 : 6$
> 3. Velg én av strategiene fra 2., og gi en illustrasjon og kort forklaring som viser at strategien alltid funker.

> [!hidden] 4.4 Medium Vurdering uke 6
> - Velg en multiplikasjon som passer til å illustrere distributiv egenskap sammen med en kort ordforklaring.  
> - Gjør beregningene under ved hjelp av regnestrategier som ikke innebærer oppstilt regning. Vis tydelig hvordan du tenker.
> - Velg én av strategiene fra 2., og gi en illustrasjon og kort ordforklaring som viser at strategien alltid funker.
>     -  $127 - 38$
>     -  $125 : 15$
>     -  $160 \cdot \frac{3}{4}$

> [!hidden] 4.5 Mild Oppgave
> 1. Forklar hva naturlige, hele, rasjonale og irrasjonale tall er.
> 2. Forklar og illustrer deretter hvordan disse til sammen utgjør de reelle tallene.

> [!hidden] 4.6 Mild Oppgave
> Alfa s. 105. Husk å utvide og eller forkorte brøkene i oppgavene for å svare på oppgavene. 

> [!hidden] 4.6 Mild Vurdering uke 5
> Finn i hvert tilfelle den likeverdige brøken med lavest mulig heltallig teller og nevner.
> 1. $\frac{14}{12}$
> 2. $\frac{2,2}{11}$
> 3. $\dfrac{\frac{6}{5}}{2}$

> [!hidden] 4.6 Mild Vurdering uke 6
> 1. Finn den likeverdige brøken til $\frac{2,1}{7}$ som har lavest mulig heltallig teller og nevner.
> 2. Uten å gjøre om til desimaltall, finn en brøk som ligger mellom $\frac{5}{6}$ og $\frac{7}{8}$.
> 3. Forkort/utvid brøkene til firedeler.
>     1. $\frac{15}{6}$
>     2. $\frac{2}{\frac{2}{3}}$

> [!hidden] 4.6 Medium 1
>  Alfa s. 105

> [!hidden] 4.6 Medium 2
>  Vis ved hjelp av illustrasjon og ordforklaring hvorfor utviding og

> [!hidden] 4.6 Medium Vurdering uke 5
> 1. Hvilke brøker er likeverdige med $\frac{9}{36}$?
>     1. $\frac{3}{6}$
>     2. $\frac{1}{4}$
>     3. $\frac{2 \frac{1}{4}}{9}$
>     4. $\frac{9+2}{36+2}$
> 2. Lag en illustrasjon som viser tydelig at $\frac{4}{5}$ og $\frac{12}{15}$ er likeverdige.  

> [!hidden] 4.6 Medium Vurdering uke 6
> 1. Hvilke brøker er likeverdige med $\frac{2}{5}$?
>     1. $\frac{4}{15}$
>     2. $\frac{1}{2,5}$
>     3. $\frac{\frac{2}{3}}{\frac{5}{3}}$
>     4. $\frac{10}{25}$
> 2. Lag en illustrasjon som tydelig viser at $\frac{2}{3}$ og $\frac{8}{12}$ er likeverdige.  

> [!hidden] 4.7 Mild 1
> Alfa s. 108. Bare beregningene, ikke lage regnefortellinger og

> [!hidden] 4.7 Mild Vurdering uke 5
> 
> Regn ut.
> 
> 1. $\frac{5}{3} + \frac{7}{5}$
> 2. $\frac{3}{5} - \frac{3}{4}$

> [!hidden] 4.7 Mild Vurdering uke 6
> 
> Regn ut.
> 
> 1. $\frac{5}{2} + \frac{2}{3}$
> 2. $\frac{7}{3} - \frac{1}{2}$

> [!hidden] 4.7 Medium 1
> Alfa s. 108.

> [!hidden] 4.7 Medium 2
> Velg en addisjon og en subtraksjon av brøker med ulike nevnere.

> [!hidden] 4.7 Medium Vurdering uke 5
> Regn ut, og gi en forklaring med illustrasjon som viser at beregningen må være riktig.
> 
> 1. $\frac{2}{5} + \frac{1}{4}$
> 2. $\frac{5}{6} - \frac{1}{3}$

> [!hidden] 4.7 Medium Vurdering uke 6
> 
> Regn ut, og gi en forklaring med illustrasjon som viser at beregningen må være riktig.
> 
> 1. $\frac{5}{2} + \frac{2}{3}$
> 2. $\frac{2}{3} - \frac{1}{2}$

> [!hidden] 4.8 Mild 1
> Alfa s. 119. Kun beregningene på mildt nivå.
> Oppgave 1.41 a, b, c og d

> [!hidden] 4.8 Mild 2
> Alfa s. 119. Kun beregningene på mildt nivå.
> Oppgave 1.42

> [!hidden] 4.8 Mild 3
> Alfa s. 119. Kun beregningene på mildt nivå.
> Oppgave 1.45

> [!hidden] 4.8 Mild Vurdering uke 5
> Regn ut.

> [!hidden] 4.8 Mild Vurdering uke 6
> 
> Regn ut.
> 1. $\frac{1}{16} \cdot \frac{2}{7}$
> 2. $\frac{6}{13} \cdot (4+\frac{1}{3})$

> [!hidden] 4.8 Medium 1
> Alfa s. 119 
> Oppgave 1.41 a, b, c og d

> [!hidden] 4.8 Medium 2
> Alfa s. 119
> Oppgave 1.42

> [!hidden] 4.8 Medium 3
> Ta utgangspunkt i de tre multiplikasjonene $7 \cdot \frac{4}{5}$,
>    $\frac{2}{3} \cdot 12$ og $\frac{2}{3} \cdot \frac{4}{5}$.
> 1.  Forklar i hvert tilfelle hvordan vi kan forstå eller tolke multiplikasjonen.
> 2. Gi en passende kontekst til hver multiplikasjon. (Lag gjerne flere kontekster slik at flere av betydningene av brøk dekkes.)
> 3. Vis ved illustrasjon og ordforklaring _hvorfor_ vi regner som vi gjør. Forsøk å knytte forklaringene til kontekstene.

> [!hidden] 4.8 Medium 4
> Vis ved hjelp av ordforklaring og illustrasjon at brøkmultiplikasjon

> [!hidden] 4.8 Medium Vurdering uke 6
> 1. Forklar ved hjelp av en passende illustrasjon at $5 \cdot \frac{3}{4} = \frac{3}{4} \cdot 5$.
> 2. Forklar kort ved hjelp av en passende illustrasjon hvorfor vi multipliserer teller med teller og nevner med nevner for å finne produktet av to brøker.  

> [!hidden] 4.9 Mild 1
> Alfa s. 119. Kun beregningene på grunnleggende.
> Oppgave 1.41 e, f og g.

> [!hidden] 4.9 Mild 2
> Alfa s. 119. Kun beregningene på grunnleggende. 
> Oppgave 1.46.

> [!hidden] 4.9 Mild Vurdering uke 5
> 
> Regn ut.
> 1. $\frac{4}{3} : \frac{14}{6}$
> 2. $\frac{3}{4} : \frac{6}{5}$

> [!hidden] 4.9 Mild Vurdering uke 6
> 
> Regn ut.
> 1. $\frac{4}{5} : \frac{5}{4}$
> 2. $\frac{4}{3} : \frac{2}{5}$

> [!hidden] 4.9 Spicy 1
> Velg en divisjon med brøk.
> 1.  Lag en passende kontekst som gir _målingsdivisjon_. Bruk konteksten til å forklare og illustrere hvorfor delingsregelen er som den er.
> 2. Lag en passende kontekst som gir _delingsdivisjon_. Bruk konteksten til å forklare og illustrere hvorfor delingsregelen er som den er.

> [!hidden] 4.9 Spicy Vurdering uke 5
> Ta utgangspunkt i divisjonen $12 : \frac{3}{4}$. Lag to passende kontekster, og bruk dem til å vise at $12 : \frac{3}{4} = 12 \cdot \frac{4}{3}$.
> 1. Den ene konteksten skal gi delingsdivisjon.
> 2. Den andre konteksten skal gi målingsdivisjon.

> [!hidden] 4.9 Spicy Vurdering uke 6
> 
> Ta utgangspunkt i divisjonen $9 : \frac{2}{3}$. Lag to passende kontekster, og bruk dem til å vise at $9 : \frac{2}{3} = 9 \cdot \frac{3}{2}$.
> 1. Den ene konteksten skal gi delingsdivisjon.
> 2. Den andre konteksten skal gi målingsdivisjon.

> [!hidden] 4.10 Medium 1
> Forklar ved hjelp av et generisk eksempel hvorfor divisjon med en brøk svarer til å gange med den omvendte brøken.

> [!hidden] 4.10 Spicy 1
> Vis algebraisk hvorfor regneregelen for divisjon med brøk er som den er.

> [!hidden] 4.11 Spicy 1
> Regn ut
> 
> $\displaystyle{\frac{3}{2}\left( 7 + \frac{3\  + \ \frac{1}{5}}{\frac{2}{3}} \right) - 1}$

> [!hidden] 4.11 Spicy 2
> Regn ut
> $\displaystyle{\frac{\left( \frac{4}{7}\  \cdot \ 2\ \frac{3}{5} \right)\  - \ 3}{\frac{2}{3}} + 8}$

> [!hidden] 4.11 Spicy 3
> Regn ut
>  $\displaystyle{\frac{\frac{4}{3}\  + \ 5}{\frac{3}{4}\  + \ \frac{3}{5}} + \frac{7}{2}\left( 1 - \frac{8}{3} \right)}$
> 

> [!hidden] 4.11 Spicy 4
> Regn ut
> $\displaystyle{\left( \frac{\left( 2\ \ :\ \frac{2}{3} \right)\  \cdot \ \frac{3}{2}}{1\  + \ \frac{3}{2}} - \frac{4}{5} \right) \cdot \left( \frac{4}{5} - 2 \right)}$

> [!hidden] 4.11 Spicy 5
> Regn ut
> $\displaystyle{\frac{\frac{-3}{4}+\frac{1}{3}}{\frac{1}{6}}+ 2\left( \frac{5}{3}-\frac{2}{6} \right)}$

> [!hidden] 4.11 Spicy 6
> Regn ut
> $\displaystyle{\left(\frac{\left(\frac{1}{7}-\frac{1}{2}\right)}{\left(\frac{1}{2}+\frac{3}{7}\right)}\right)+ 2\left( \frac{1}{2}-\frac{8}{26} \right)}$
> 

> [!hidden] 4.11 Spicy 7
> Regn ut
> $\displaystyle{\left(\frac{\left( 2:\frac{1}{6} \right)\cdot 5}{2-\frac{4}{3}}- 10\right)\cdot \left( \frac{5}{8}-\frac{1}{2} \right)}$

> [!hidden] 4.11 Spicy Vurdering uke 5
> 1. $\displaystyle \frac{\frac{14}{16}\big(2+\frac{3-\frac{2}{3}}{\frac{7}{3}}\big)}{\dfrac{21}{5}}+ \frac{1}{8}$
> 2. $\displaystyle\frac{\frac{4}{11}\big(\frac{15}{6 + \frac{3}{2}}+ 9\big) +\frac{11}{7}}{\frac{39}{7}}$

> [!hidden] 4.11 Spicy Vurdering uke 6
> 
> Regn ut.
> 1. $\displaystyle((\frac{4}{5} + \frac{1}{\frac{7}{3}}) \frac{1}{43}) \cdot 7 + \frac{4}{5}$
> 2. $\displaystyle\frac{1}{2} - \frac{\frac{4}{11}((\frac{8}{6} : \frac{1}{3}) + \frac{2}{5})}{\frac{4}{2,5}}$

> [!hidden] 4.12 Mild 1
> Utdyp og forklar: _desimaltall er en skrivemåte for brøker der

> [!hidden] 4.12 Mild 2
> Forklar hva $257,1208$ betyr ved å vise til hvordan

> [!hidden] 4.12 Mild 3
> Alfa s. 139
> Oppgave 1.65.

> [!hidden] 4.12 Mild 4
> Alfa s. 139
> Oppgave 1.66.

> [!hidden] 4.12 Mild 5
> Alfa s. 139
> Oppgave 1.67.

> [!hidden] 4.12 Medium Alfa s. 140
> 1. 1.68
> 2. 1.69
> 3. 1.70

> [!hidden] 4.12 Medium Alfa s. 140
> Oppgave 1.69

> [!hidden] 4.12 Medium Alfa s. 140
> 1.70

> [!hidden] 4.13 Mild 1
> Forklar og gi eksempler på endelig, periodisk og uendelig

> [!hidden] 4.13 Mild 2
>  Hvilke brøker svarer til endelige og hvilke svarer til periodiske

> [!hidden] 4.13 Medium 1
> Gjør om til desimaltall. Fremgangsmåte, strategi eller begrunnelse for omgjøringen må komme tydelig frem.
> 1. $\frac{6}{5}$
> 2. $\frac{4}{15}$ 
> 3. $\frac{7}{2}$ 
> 4. $\frac{12}{30}$ 
> 5.  $\frac{14}{450}$ 
> 6.  $\frac{3}{40}$

> [!hidden] 4.13 Medium 2
> Gjør om til brøk maksimalt forkortet brøk. Fremgangsmåte, strategi eller begrunnelse for omgjøringen må komme tydelig frem.
> 1. $0,21$
> 2. $0,0202$
> 3. $3,333$

> [!hidden] 4.13 Medium 3
> Gjør om til desimaltall. Fremgangsmåte, strategi eller begrunnelse for omgjøringen må komme tydelig frem.
> 
> $\frac{4}{15}$ 

> [!hidden] 4.13 Medium 4
> Gjør om til desimaltall. Fremgangsmåte, strategi eller begrunnelse for omgjøringen må komme tydelig frem.
> 
> $\frac{7}{2}$ 

> [!hidden] 4.13 Medium 5
> Gjør om til desimaltall. Fremgangsmåte, strategi eller begrunnelse for omgjøringen må komme tydelig frem.
> 
> $\frac{12}{30}$ 

> [!hidden] 4.13 Medium 6
> Gjør om til desimaltall. Fremgangsmåte, strategi eller begrunnelse for omgjøringen må komme tydelig frem.
> 
> $\frac{14}{450}$ 

> [!hidden] 4.13 Medium 7
> Gjør om til desimaltall. Fremgangsmåte, strategi eller begrunnelse for omgjøringen må komme tydelig frem.
> 
> $\frac{3}{40}$

> [!hidden] 4.13 Spicy 1
>  Alle brøkene som svarer til endelige desimaltall, har en felles egenskap. forklar hvilken det er, og gi en begrunnelse for at det er slik.

> [!hidden] 4.13 Spicy 2
> Brøkene som ikke svarer til endelige desimaltall, gir periodiske desimaltall. Begrunn hvorfor det er slik.

> [!hidden] 4.14 Spicy Alfa s. 140.
> Oppgave 1.73

> [!hidden] 4.14 Spicy Alfa s. 140.
> Oppgave 1.74
>

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $0,\overline{45}$

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $0,0\overline{45}$

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $0,\overline{123}$

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $0,123\overline{45}$
> 

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $1,001001001\ldots$

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $0,111\ldots$

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $0,222\ldots$
> 

> [!hidden] 4.14 Spicy Gjør om til brøk.
> $0,333\ldots$

> [!hidden] 4.14 Spicy Gjør om til desimaltall.
> 1.  $\frac{6}{7}$
> 2. $\frac{5}{11}$
> 3. $\frac{3}{14}$
> 4. $\frac{1}{44}$ 

> [!hidden] 4.14 Spicy Gjør om til desimaltall.
> $\frac{5}{11}$

> [!hidden] 4.14 Spicy Gjør om til desimaltall.
> $\frac{3}{14}$

> [!hidden] 4.14 Spicy Gjør om til desimaltall.
> $\frac{1}{44}$ 

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.77

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.78.
> 

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.79.
> 

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.80.
>

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.81.

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave1.82.

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.83.

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.84.

> [!hidden] 4.15 Mild Alfa s. 143
> Oppgave 1.85.

> [!hidden] 4.15 Mild Alfa s. 144
> 1. 1.87
> 2. 1.88
> 3. 1.89
> 4. 1.90

> [!hidden] 4.15 Medium Alfa s. 143--144:
> Oppgave 1.77.

> [!hidden] 4.15 Medium Alfa s. 143--144:
> Oppgave 1.91.

> [!hidden] 4.15 Medium Velg egne tall. Finn, ved hjelp av flere strategier, og begrunn dem i hvert tilfelle
> 1. en prosentdel av et tall (hva er $x$ prosent av $y$?)
> 2. en del av et tall uttrykt som prosent del (hvor stor prosentdel utgjør $x$ av $y$?)
> 3. det hele når del og prosentdel er kjent (hvis $x$ utgjør $y$ prosent, hva er da $100$ %?)
> [!hidden] 4.16 Spicy 1
> Alfa s. 143: 
> 1.86

> [!hidden] 4.16 Spicy 2
> To butikker selger i utgangspunktet en vare til samme pris. Den ene butikken setter opp varen med 10 % for siden å sette den ned med 10%. Den andre butikken gjør motsatt: først ned 10 %, siden opp 10 %.
> 1. Hvor lønner det seg å handle?
> 2. Generaliser problemstillingen og løs den.

> [!hidden] 4.16 Spicy 3
> Blant en gruppe mennesker er 60 % gutter. Når det kommer 5 nye jenter, andelen 50/50. Hvor mange var de i utgangspunktet?

> [!hidden] 4.16 Spicy 4
> To kraner står over ei bøtte. Den ene krana fyller halve bøtta på en time. Den andre fyller en firedel på samme tid. Hvor lang tid tar før bøtta er full om begge kranene åpnes på likt?
> 1. Hvor lang tid tar det hvis man har tre kraner, en som fyller bøtta på en time, en som fyller en firedel på en time og en som fyller en sjettedel på en time?
> 2. Hva hvis vi har tre kraner, kran A, B og C. Hvor lang tid tar det hvis kran A fyller $\frac{1}{a}$ av bøtta på en time, B fyller $\frac{1}{b}$ av bøtta på en time og C fyller $\frac{1}{c}$ av bøtta på en time. 

> [!hidden] 4.16 Spicy 5
> I testamentet gir tante Beate halvparten av formuen sin til Røde Kors. Hennes tre nevøer skal dele resten. Per skal bare få to tredeler av det hver av de to andre nevøene skal få, etter som han ikke besøkte henne den siste tiden. 
>    - Hvor stor andel av formuen skal Per ha?

> [!hidden] 4.16 Spicy 6
>  Her er et snedig triks for å finne en brøk som ligger mellom to andre brøker: Lag brøken der teller er summen av de to brøkenes tellere, og nevneren summen av de to brøkenes nevnere. Eksempel: Brøken $\frac{2\  + \ 4}{3\  + \ 5}$ ligger mellom $\frac{2}{3}$ og
>  $\frac{4}{5}$. 
>  Vis at trikset alltid funker. (Hint: Det kan lønne seg å bruke at dersom $\frac{2}{3} < \frac{4}{5}$, så er $2 \cdot 5 < 3 \cdot 4$.)
> [!hidden] 4.17 Mild Regn ut.
> $12 - ( - 3)$

> [!hidden] 4.17 Mild Regn ut.
> $- 12 + ( - 3)$

> [!hidden] 4.17 Mild Regn ut.
> $- ( - 12 + ( - 3))$
>

> [!hidden] 4.17 Mild Regn ut.
> $1 - ( - 12 + ( - 3))$
> 

> [!hidden] 4.17 Mild Regn ut.
>  $(5 - 7) - ( - 3 + 2)$

> [!hidden] 4.17 Mild Regn ut.
>  $- 20 - ( - 13)$
>

> [!hidden] 4.17 Mild Regn ut.
>  $- \left( ( - 23) - ( - 3) \right) - (( - 81) - ( - 19))$
>

> [!hidden] 4.17 Mild Regn ut.
> $\left( ( - 23) - 3 \right) - (( - 81) + ( - 19))$

> [!hidden] 4.17 Medium 1
> Lag regnetabeller som med utgangspunkt i de naturlige tallene, viser hvordan addisjon og subtraksjon må oppføre seg for å gi en meningsfull utvidelse til negative tall.

> [!hidden] 4.17 Medium 2
> Forklar med ord hvordan addisjon og subtraksjon av negative tall må oppføre seg med utgangspunkt i beskrivelsen av (hele) negative tall som _motsatte av de positive (hele) tallene_.

> [!hidden] 4.17 Medium 3
> Illustrer forklaringa fra forrige oppgave på tallinjer.

> [!hidden] 4.18 Mild Regn ut.
> $- 3 \cdot 5$

> [!hidden] 4.18 Mild Regn ut.
> $- 3 \cdot (5 - 1)$
> 

> [!hidden] 4.18 Mild Regn ut.
> $- 3 \cdot \left( - (5 - 1) \right)$
> 

> [!hidden] 4.18 Mild Regn ut.
> $2 \cdot \frac{12 - 15}{- 2}$
> 

> [!hidden] 4.18 Mild Regn ut.
> $- \frac{3}{2} \cdot \left( 5 - \frac{4}{- 9} \right)$

> [!hidden] 4.18 Mild Regn ut.
> $\left( ( - 18) \cdot ( - 2) \cdot \left( - \frac{1}{3} \right) \right)\ :( - 12)$

> [!hidden] 4.18 Medium 1
> Lag en multiplikasjonstabell for $0$--$10$. Utvid tabellen til

> [!hidden] 4.18 Medium 2
> Ta utgangspunkt i beskrivelse av negative tall som _motsatte av de positive tallene,_ og tolkninga av multiplikasjonen $a \cdot b$ som $b$ gjentatt (eller kopiert) $a$ ganger. Beskriv med ord hva som da er fornuftige tolkninger av $a \cdot ( - b)$, $( - a) \cdot b$ og $( - a) \cdot ( - b)$. Du må gjerne bruke generiske talleksempler i stedet for bokstaver.

> [!hidden] 4.18 Medium 3
> Illustrer forklaringa fra oppgaven over på tallinjer.

> [!hidden] 4.18 Medium 4
>  Siden et tall ganger null er null, og et tall minus seg selv er null, må for eksempel $3 \cdot (2 - 2)$ være $0$. Bruk dette til å vise at
>  1. $a \cdot (b - b)$ gir at produktet av et positivt og et negativt tall må være negativt, og at
>  2. $- a \cdot (b - b)$ gir at produktet av to negative tall må være positivt. Du kan godt bruke generiske talleksempler.

> [!hidden] 4.19 Mild 1
> Forkort uttrykkene så langt som mulig (det betyr, blant annet, å bruke primtallsbaser. For eksempel at $25$ skal skrives som $5^2$)
> 1. $2^5\cdot 3^8 \cdot 2^9 \cdot 9$.
> 2. $4\cdot 16 \cdot 6 \cdot3^2$.
> 3. $4^2 \cdot 9^2 \cdot 16^2 \cdot 27^3$.
> 4. $2\cdot 3\cdot 4 \cdot 5 \cdot 6 \cdot 7 \cdot 8 \cdot 9 \cdot 10$.
> 5. $12\cdot 16\cdot 18 \cdot 20 \cdot 21 \cdot 25 \cdot 24$.
> 6. $(2^2 + 4)\cdot 32 \cdot 3 \cdot 9 \cdot 27$.

> [!hidden] 4.19 Mild 2
> Alfa s. 239-241 
> 1. 3.23
> 2. 3.25
> 3. 3.29 a og b

> [!hidden] 4.19 Mild Vurdering uke 6
> 
> Forkort uttrykkene så langt som mulig (det betyr, blant annet, å bruke primtallsbaser. For eksempel at $25$ skal skrives som $5^2$)
> 
> $10^3 \cdot 15^2 \cdot 21^3 \cdot 30^9$.

> [!hidden] 4.19 Medium Alfa s. 239--241 (Det er ikke meningen å gjøre alt! Øv på det du trenger å øve på.)
> 1. 3.23
> 2. 3.25
> 3. 3.26
> 4. 3.27
> 5. 3.29
> 6. 3.32
> 7. 3.38

> [!hidden] 4.19 Medium 2
> Begrunn avgjørelsene deres for *hvert* alternativ i oppgavene under. (Ikke for vår, men for din egen lærings skyld.)
>  1. Hvilke(t) alternativ er $4^{7} \cdot 2^{4}$ lik? A. $4^{11}$ B. $8^{6}$ C. $8^{11}$ D. $4^{9}$ E. $2^{18}$
>  2. Hvilke(t) alternativ er $2^{16} + 2^{16} + 2^{16} + \ldots + 2^{16}$ (16 ledd) lik? A. $4^{10}$ B. $2^{19}$ C. $16^{2}$ D. $2^{5} \cdot 8^{5}$ E. $2^{32}$
>  3. Hvilke(t) alternativ er $10^{12}\ :20^{6}$ lik? A. $\frac{10^{12}}{2 \cdot 10^{6}}$ B. $1$ C. $5^{6}$ D. $10^{(12 - 6)}\ :2^{6}$ E. $25^{3}$
>  4. Hvilke(t) alternativ er $9^{- 6} \cdot 3^{12}$ lik? A. $9^{4}$ B. $1$ C. $81^{- 3} \cdot 81^{3}$ D. $9^{- 6 + 6}$ E. $\frac{1}{6^{9}} \cdot 3^{12}$

> [!hidden] 4.19 Medium Vurdering uke 6
> 1. Forkort uttrykkene så langt mulig 
> $$
> 25^3 \cdot 10^{-9} \cdot \frac{\big((20)^2\big)^3 \ \cdot \ 5^{-6}}{2^5}
> $$
> 2. Avgjør om *hvert alternativ* under er lik $10^5\cdot 3$
> $$
> \begin{align*} 
> & \text{1. } \quad \frac{20^6 \cdot 9 }{2^7\cdot 15} \\
> & \text{2. } \quad \frac{30^{3}\cdot2^3}{10^{-4}\cdot 3^{2}\cdot 2^5\cdot 5^2} \\
> & \text{3. } \quad 30^3\cdot \frac{10^3}{2^2\cdot 15^2}
> \end{align*} 
> $$

> [!hidden] 4.19 Spicy 1
> Alfa s. 239--341
> 1. 3.28
> 2. 3.37

> [!hidden] 4.19 Spicy 2
> Regn ut ved hjelp av potensregler.
> 1. $2 \cdot \sqrt{100} \cdot 5^{- 1} \cdot 8^{- \frac{2}{3}}$
> 2. ${\sqrt[13]{5^{\frac{2}{3}} \cdot 5^{\frac{3}{2}}}}^{\ 6}$
> 3. $\frac{\left( \frac{2}{5}\  \cdot {\ 125}^{\frac{2}{5}} \right)^{5}}{2}$

> [!hidden] 4.19 Spicy 3
> Avgjør og begrunn om uttrykkene har lik verdi.
> 1. $\sqrt{3} \cdot 2^{4}$ og $\sqrt{6} \cdot {\sqrt{2}}^{7}$
> 2. $81^{\frac{2}{4}}$ og $\left( \frac{18}{4} \cdot 2 \right)^{\frac{1}{2}}$
> 3. $2^{3} \cdot 12^{- \frac{3}{2}}$ og $\left( {\sqrt[3]{3}}^{2} \right)^{- 1}$
> 4. $\sqrt{3} \cdot 2^{4}$ og $\frac{3\  \cdot {\ \sqrt{2}}^{9}}{\sqrt{6}}$
> 5. $\frac{4^{10}\  \cdot {\ 10}^{2}}{32^{\frac{10}{4}}}$ og $2^{10} \cdot 10^{2}$

> [!hidden] 4.19 Spicy 4
> Skriv som potens
> 1.  $0.125$
> 2. $0.25$
> 3. $0.16$
> 4. $1.96$

> [!hidden] 4.19 Spicy 5
> Finn $n$:
> 1. $2 = 32^{\frac{1}{n}}$
> 2. $9^{\frac{3}{n}} = 27$
> 3. $n^{\frac{3}{2}} = 125$.

> [!hidden] 4.19 Spicy Vurdering uke 6
> 1. Regn ut ved hjelp av potensregler.
>     1. $2 \cdot \sqrt{100} \cdot 5^{- 1} \cdot 16^{- \frac{2}{6}}$
>     2. ${({5^{\frac{2}{3}} \cdot 5^{\frac{3}{2}}})}^{ 6/13}$
> 2. Avgjør og begrunn om uttrykkene har lik verdi $5^{3} \cdot 75^{- \frac{3}{2}}$ og $\left( {3}^{2/3 } \right)^{- 1}$
> 3. Skriv som potens: $0.125$
> 4. Finn $n$: når $9 = 81^{\frac{2}{n}}$.

> [!hidden] 4.20 Medium Vurdering uke 6
> 
> Ta utgangspunkt i definisjonen $a^n \overset{\text{def}}{=} a\cdot a\cdot ...\cdot a$ for $n>1$ faktorer, alle lik $a$, og utled potenssammenhengene. (Du kan bruke talleksempler så lenge de fungerer som generiske eksempler.)  
> 1. $a^n\cdot a^m$ for alle heltallige $n$ og $m$.
> 2. $(a^n)^m = a^{n\cdot m}$
> 3. $a^0 = 1$ for $a \neq 0$.
> 4. $a^{-1} = \frac{1}{a}$.

> [!hidden] 4.20 Spicy Vurdering uke 6
> 
> Ta utgangspunkt i definisjonen $a^n \stackrel{\text{def}}{=} a\cdot a\cdot ...\cdot a$ for $n>1$ faktorer, alle lik $a$, og utled potenssammenhengene. (Du kan bruke talleksempler så lenge de fungerer som generiske eksempler.)  
>   1. $a^n\cdot a^m = a^{n+m}$
>   2. $(a^n)^m = a^{n\cdot m}$
>   3. $a^{\frac{1}{m}}=\sqrt[m]{a}$
>   4. $a^{\frac{n}{m}}=(\sqrt[m]{a})^n$ og at $a^{\frac{n}{m}} = \sqrt[m]{(a^n)}$

> [!hidden] 5.1 Mild 1
> På onsdager kjøper Henrik kaffe i kaffebaren på UiA. Han velger alltid mellom sort kaffe, kaffe latte, cappuccino og *flat white*. Han kan også velge mellom størrelsene liten, medium og stor. Hvor mange valgmuligheter har han?

> [!hidden] 5.1 Mild 2
> På torsdager klatrer André og Henrik. De drar enten på klatresenteret på odderøya eller på grim. Der kan de også velge å enten buldre, eller topptau eller klatre på led. Hvor mange muligheter har de å velge mellom?

> [!hidden] 5.1 Mild 3
> Når Henrik skal velge klær om morgenen følger han sin daglige rutine. Han legger frem seks forskjellige sorte bukser og seks forskjellige sorte t-skjorter. Deretter slår han en terning for å avgjøre hvilken bukse han skal bruke og så slår han terningen på nytt for å velge hvilken t-skjorte han skal bruke. Avgjør hvor mange forskjellige kombinasjoner av sorte bukser og sorte t-skjorter Henrik kan bruke. 

> [!hidden] 5.1 Mild 4
> André skal lage pizza med guttungen sin Philip. Først ber han Philip om å velge om de skal ha tynn eller tykk bunn. Deretter spør han Philip om de skal ta skinke eller peperoni på pizzaen. Til spør han Philip om de skal ha, mais, ananas, mais *og* ananas, eller ingenting mer på pizzaen. Hvor mange forskjellige pizzaer kan de lage?

> [!hidden] 5.1 Mild Vurdering uke 3
> Du skal reise til København med vennegjengen. Du skal ta buss til Oslo og deretter ta fly fra Oslo. Du kan velge mellom tre forskjellige busselskap og tre forskjellige flyselskap. Hvor mange forskjellige reisevalg har du?

> [!hidden] 5.1 Mild Vurdering uke 4
> Du har tre bukser, fem t-skjorter å velge mellom. Bruk produktregelen til å avgjøre hvor mange forskjellige antrekk kan du bruke?

> [!hidden] 5.1 Mild Vurdering uke 5
> Du skal lage en treningsøkt med tre øvelser. I den første øvelsen skal du trene mage og skal enten ha situps eller planke. I den andre øvelsen skal du ha en pressøvelse, enten skulderpress eller pushups. I den tredje øvelsen skal du trene ben og vil velge mellom knebøy, markløft eller utfall. Bruk produktregelen til å avgjøre hvor mange forskjellige treningsøkter du kan lage?

> [!hidden] 5.1 Medium 1
> Forklar, ved hjelp av en illustrasjon, hvorfor følgende situasjon beskriver et sammensatt valg. *Henrik skal kjøpe mat og drikke i kantina. Han velger å kjøpe en suppemeny, der han kan velge mellom tre forskjellige typer supper og seks forskjellige typer drikke*.
> 

> [!hidden] 5.1 Medium 2
> Gi et eksempel på et sammensatt valg.
> -  Bruk eksempelet til å illustrere og forklare produktregelen. 

> [!hidden] 5.1 Medium 3
> I oppgavene under skal du løse problemene. Deretter skal du ta utgangspunkt i situasjonene til å forklare og illustrere hvorfor produktregelen må gjelde generelt.
> 1. På onsdager kjøper Henrik kaffe i kaffebaren på UiA. Han velger alltid mellom sort kaffe, kaffe latte, cappuccino og *flat white*. Han kan også velge mellom størrelsene liten, medium og stor. Hvor mange valgmuligheter har han?
> 2. På torsdager klatrer André og Henrik. De drar enten på klatresenteret på odderøya eller på grim. Der kan de også velge å enten buldre, eller topptau eller klatre på led. Hvor mange muligheter har de å velge mellom?
> 3. Når Henrik skal velge klær om morgenen følger han sin daglige rutine. Han legger frem seks forskjellige sorte bukser og seks forskjellige sorte t-skjorter. Deretter slår han en terning for å avgjøre hvilken bukse han skal bruke og så slår han terningen på nytt for å velge hvilken t-skjorte han skal bruke. Avgjør hvor mange forskjellige kombinasjoner av sorte bukser og sorte t-skjorter Henrik kan bruke. 
> 4. André skal lage pizza med guttungen sin Philip. Først ber han Philip om å velge om de skal ha tynn eller tykk bunn. Deretter spør han Philip om de skal ta skinke eller peperoni på pizzaen. Til slutt spør han Philip om de skal ha, mais, ananas, mais *og* ananas, eller ingenting mer på pizzaen. Hvor mange forskjellige pizzaer kan de lage?

> [!hidden] 5.1 Medium Vurdering uke 3
> _Du skal reise til København med vennegjengen. Du skal ta buss til Oslo og deretter ta fly fra Oslo. Du kan velge mellom tre forskjellige busselskap og tre forskjellige flyselskap. Hvor mange forskjellige reisevalg har du?_
> 1. Løs oppgaven ved hjelp av produktregelen.
> 2. Bruk oppgaven til å illustrere og forklare hvorfor produktregelen må gjelde generelt.

> [!hidden] 5.1 Medium Vurdering uke 4
> Ta utgangspunkt i følgende oppgave:
> 
> *Du har tre bukser, fem t-skjorter å velge mellom. Bruk produktregelen til å avgjøre hvor mange forskjellige antrekk kan du bruke?*
> 1. Løs oppgaven ved hjelp av produktregelen.
> 2. Bruk oppgaven til å illustrere og forklare hvorfor produktregelen må gjelde generelt.

> [!hidden] 5.1 Medium Vurdering uke 5
> Ta utgangspunkt i følgende oppgave:
> 
> *Du skal lage en treningsøkt med tre øvelser. I den første øvelsen skal du trene mage og skal enten ha situps eller planke. I den andre øvelsen skal du ha en pressøvelse, enten skulderpress eller pushups. I den tredje øvelsen skal du trene ben og vil velge mellom knebøy, markløft eller utfall. Bruk produktregelen til å avgjøre hvor mange forskjellige treningsøkter du kan lage?*
> 1. Løs oppgaven ved hjelp av produktregelen.
> 2. Bruk oppgaven til å illustrere og forklare hvorfor produktregelen må gjelde generelt.

> [!hidden] 5.2 Mild 1
> Ved hjelp av et eksempel og en illustrasjon, forklar addisjonssetningen for mengder. 
> 

> [!hidden] 5.2 Mild 2
> På en skole må elevene ha minst ett fremmedspråk. De kan enten ha tysk eller fransk. 
> 1. I en klasse er det 18 elever som har fransk og 22 elever som har tysk. Hvor mange elever er det som har begge deler dersom det er 32 stykker i klassen?
> 2. I en klasse er det 22 elever som har fransk og 30 elever som har tysk. Hvor mange elever er det i klassen dersom det er 10 stykker som har begge deler?
> 3. I en klasse er det 25 elever som har tysk og 6 elever som har både tysk og fransk. Hvor elever er det som har *kun* tysk, dersom det er 40 stykker i klassen?

> [!hidden] 5.2 Mild Vurdering uke 3
> Ved hjelp av et eksempel og en illustrasjon, forklar addisjonssetningen for mengder.

> [!hidden] 5.2 Mild Vurdering uke 5
> 
> Ved hjelp av et eksempel og en illustrasjon, forklar addisjonssetningen for mengder.

> [!hidden] 5.2 Medium 1
>  I en klasse med 50 elever leste alle minst ett språk, fransk eller spansk. 30 tok fransk og 22 tok begge. Hvor mange leste kun spansk? 

> [!hidden] 5.2 Medium 2
> På en folkehøgskole er det 148 elever. Skolen har en filmgruppe, en esportgruppe og en sportsgruppe. Det er 66 elever i filmgruppa, 48 elever i esportsgruppa og 71 elever med i sportsgruppa. 13 elever er med i både film- og esportsgruppa, 22 elever kombinerer esport og sport og 17 elever er med i både sport- og filmgruppa. Fem elever var med i alle tre gruppene.
> 1. Hvor mange elever er ikke med i noen av de tre gruppene?
> 2. Hvor mange elever er med i nøyaktig to grupper?
> 3. Hvor mange elever er med i bare filmgruppa?

> [!hidden] 5.2 Medium 3
> Henrik har en tresifret kombinasjon på sykkellåsen sin. Du får vite at koden inneholder en toer (minst), men er ikke et partall. Avgjør hvor mange gjenværende muligheter det er.
> - Illustrer problemet i et Venn-diagram og bruk dette til å forklare addisjonssetningen.  

> [!hidden] 5.2 Medium 4
> André har en tresifret kombinasjon på sykkellåsen sin. Du får vite at koden inneholder minst én ener og minst én toer. Du regner deg fram til at det er 271 koder som inneholder minst én ener, og 271 koder som inneholder minst én toer. I tillegg er det 512 av de totalt 1000 mulighetene som hverken inneholder enere eller toere. Hvor mange forskjellige koder kan André ha på sin lås?
> - Illustrer problemet i et Venn-diagram og bruk dette til å forklare addisjonssetningen.  

> [!hidden] 5.2 Medium 5
>  Det er $30$ tall under $61$ som er delelig på 2 fordi ${611 \over 2} = 30+ \text{én i rest}$. <br>Hvor mange tall under 61 er delelig på enten 2 eller 5? Besvarelsen må inneholde en illustrasjon som får fram hvordan du har løst problemet.
>  - Illustrer problemet i et Venn-diagram og bruk dette til å forklare addisjonssetningen.  

> [!hidden] 5.2 Medium 6
> Det er $30$ tall under $121$ som er delelig på 4 fordi ${121 \over 4} = 30+ \text{én i rest}$. <br>Hvor mange tall under 121 er delelig på enten 4, 11 eller 59? Besvarelsen må inneholde en illustrasjon som får fram hvordan du har løst problemet.
> - Illustrer problemet i et Venn-diagram og bruk dette til å forklare addisjonssetningen.  

> [!hidden] 5.2 Medium Vurdering uke 3
> 1. På en skole er det 200 elever. På fritiden driver 100 stykker med fotball, 50 driver med håndball, 20 driver med klatring. De som klatrer driver ikke med noen annen idrett på fritiden. I tillegg er det 70 som ikke driver med noen av disse idrettene på fritiden. Hvor mange er det som driver med fotball eller håndball?
> 2. Illustrer problemet i et Venn-diagram og bruk dette til å forklare addisjonssetningen.

> [!hidden] 5.2 Medium Vurdering uke 4
> 1. På en skole var det tre aktiviteter som var veldig typiske, badminton, volleyball og esport. Det var 23 stykker som drev med badminton, 20 stykker som drev med volleyball og 60 som drev med esport. Ingen av de som drev med esport drev med badminton eller volleyball. Det var 13 som drev med både volleyball og badminton. I tillegg var det 100 elever som kun drev med andre aktiviteter på fritiden. Hvor mange elever gikk det på skolen?
> 2. Ved hjelp av et eksempel, illustrer og forklar addisjonssetningen.

> [!hidden] 5.2 Medium Vurdering uke 5
> 1. På en lærerutdanning går det 300 studenter. 50 av studentene trener på Spicheren, 100 av studentene er medlem av Kristiansand studentidrettslag (KSI), 60 av studentene trener på Sats. 40 av studentene som trener på Spicheren, er også medlem av KSI, og 40 av studentene som trener på Sats er medlem av KSI. Det er ingen studenter som trener på både Spicheren og Sats. Hvor mange studenter er det som *ikke* er tilknyttet Spicheren, Sats eller KSI?
> 2. Illustrer problemet i et Venn-diagram og bruk dette til å forklare addisjonssetningen.  

> [!hidden] 5.3 Mild Avgjør om situasjonene under kan tenkes som (u)ordnede utvalg m/u tilbakelegg
> 1. Du skal velge ut en komité fra en 20 lærerstudenter. Komitéen skal bestå av 4 studenter.
> 2. En klasse med 25 elever skal velge tillitsvalgt. De skal velge to tillitsvalgte. Første elev skal være hovedtillitsvalgt, neste skal være stedfortreder.
> 3. Hver uke i tre uker har 6 lærere et ukentlig bruslotteri der de vinner en sekspakning Cola hvis de vinner. Det trekkes en vinner blant de 6 lærerne hver uke.
> 4. Til et lag i $4 \times 100$m stafett er det tatt ut fire sprintere, A, B, C og D. Hvor mange rekkefølger kan de stille opp stafettlaget på?
> 5. Du har et bord med seks plasser og du skal dekke på til fire. Hvor mange mulige kombinasjoner kan lage?
> 6. Du skal kjøpe en firepakning med donuts fra Donutsjappa ved Aquarama. De har tre typer donuts du kan velge mellom. Hvor forskjellige firepakninger kan du lage?
> 7. Du skal trekke ut fire gutter fra en klasse på 16 gutter og 17 jenter. Hvor mange måter kan du gjøre det på?
> 8. Syv studenter bor i et kollektiv sammen. Den første uke trakker de lodd om hvem som skal lage mat, gjøre rent fellesarealet og vaske badet. Ingen får mer enn én jobb. Hvor mange mulige utfall kan trekningen ha?

> [!hidden] 5.3 Mild Vurdering uke 3
> Avgjør om situasjonene under kan tenkes som ordnede eller uordnede utvalg og om utvalgene er med eller uten tilbakelegg:
> 1. I bedriftsidrettslaget er det 20 medlemmer som spiller basket. På hvor mange måter kan det velges to personer som skal sitte i styret av basketballavdelingen?
> 2. I en klasse på 18 elever skal det velges ut en elevrådsleder og en vara. På hvor mange måter kan det gjøres på?
> 3. I en klasse er det 12 gutter og 10 jenter. På hvor mange måter kan man velge ut 4 gutter?
> 4. En student ved lærerutdanninga har møtt opp på alle obligatoriske undervisninger. Nå gjenstår det fire obligatoriske seminarer, og studenten vil komme over fraværsgrensa på 70% selv om de ikke møter på noen av seminarene. Studenten har derfor konkludert med at de står fritt til å velge om de vil møte opp eller ikke for hver av de fire seminarene. På hvor mange utvalg av seminarer kan de velge å gå på?

> [!hidden] 5.3 Mild Vurdering uke 4
> Avgjør om situasjonene under kan tenkes som ordnede eller uordnede utvalg og om utvalgene er med eller uten tilbakelegg:
> 1. Du trekker fem forskjellige kuler fra en urne som inneholder kuler nummerert fra 1 til 10. Hvor mange ulike utvalg kan du gjøre?
> 2. Du har en liste med 50 middager som du liker. Hver uke trekker du ut syv middagsretter som utgjør din ukesmeny. Hvor mange forskjellige ukesmenyer kan du lage?
> 3. Et lag skal spille 12 kamper. Du er interessert i sluttresultatene og registrerer resultatene i en tabell. I tabellen har du tre kolonner, seier, uavgjort og tap. Du setter en $x$ i riktig kolonne for hver kamp som spilles. Avgjør hvor mange måter tabellen kan se ut når de 12 kampene er spilt.
> 4. Du har konkludert med at du rekker 10 oppgaver hver gang det er en vurderingsøkt. Neste uke er det 40 mulige oppgaver å gjøre. Hvor mange mulige utvalg av oppgaver kan du velge ut?

> [!hidden] 5.3 Mild Vurdering uke 5
> 
> Avgjør om situasjonene under kan tenkes som ordnede eller uordnede utvalg og om utvalgene er med eller uten tilbakelegg:
> 1. Til årsmøtet i et lag møter det ti personer. På hvor mange måter kan det velges formann, nestformann og kasserer?
> 2. I en klasse på 20 elever skal det velges ut en gruppe på 6. På hvor mange måter kan det gjøres på?
> 3. På hvor mange måter kan forskjellige tresifrede tall lages med sifrene 1, 2, 3, 4 og 6, der en kan gjenta gjenta sifre?
> 4. På en flervalgsprøve med åtte spørsmål er det tre alternativer på hvert spørsmål, der kun ett alternativ er rett. Hvor mange mulige forskjellige besvarelser kan man gi på prøven?

> [!hidden] 5.3 Medium 1
> Løs oppgavene fra mild

> [!hidden] 5.3 Medium 2
> Ved hjelp av fire eksempler, forklar utvalgene
>  1. ordna utvalg med tilbakelegg,
>  2. ordna utvalg uten tilbakelegg,
>  3. uordna utvalg uten tilbakelegg,
>  4. uordna utvalg med tilbakelegg.

> [!hidden] 5.3 Medium Vurdering uke 3
> 1. Avgjør om situasjonene under kan tenkes som ordnede eller uordnede utvalg og om utvalgene er med eller uten tilbakelegg:
>     1. I bedriftsidrettslaget er det 20 medlemmer som spiller basket. På hvor mange måter kan det velges to personer som skal sitte i styret av basketballavdelingen?
>     2. I en klasse på 18 elever skal det velges ut en elevrådsleder og en vara. På hvor mange måter kan det gjøres på?
>     3. I en klasse er det 12 gutter og 10 jenter. På hvor mange måter kan man velge ut 4 gutter?
>     4. En student ved lærerutdanninga har møtt opp på alle obligatoriske undervisninger. Nå gjenstår det fire obligatoriske seminarer, og studenten vil komme over fraværsgrensa på 70% selv om de ikke møter på noen av seminarene. Studenten har derfor konkludert med at de står fritt til å velge om de vil møte opp eller ikke for hver av de fire seminarene. På hvor mange utvalg av seminarer kan de velge å gå på?
> 2. Ved hjelp av fire eksempler, forklar utvalgene
>     1. ordna utvalg med tilbakelegg,
>     2. ordna utvalg uten tilbakelegg,
>     3. uordna utvalg uten tilbakelegg,
>     4. uordna utvalg med tilbakelegg.

> [!hidden] 5.3 Medium Vurdering uke 4
> 1. Avgjør om situasjonene under kan tenkes som ordnede eller uordnede utvalg og om utvalgene er med eller uten tilbakelegg:
>     1. Du trekker fem forskjellige kuler fra en urne som inneholder kuler nummerert fra 1 til 10. Hvor mange ulike utvalg kan du gjøre?
>     2. Du har en liste med 50 middager som du liker. Hver uke trekker du ut syv middagsretter som utgjør din ukesmeny. Hvor mange forskjellige ukesmenyer kan du lage?
>     3. Et lag skal spille 12 kamper. Du er interessert i sluttresultatene og registrerer resultatene i en tabell. I tabellen har du tre kolonner, seier, uavgjort og tap. Du setter en $x$ i riktig kolonne for hver kamp som spilles. Avgjør hvor mange måter tabellen kan se ut når de 12 kampene er spilt.
>     4. Du har konkludert med at du rekker 10 oppgaver hver gang det er en vurderingsøkt. Neste uke er det 40 mulige oppgaver å gjøre. Hvor mange mulige utvalg av oppgaver kan du velge ut?
> 2. Ved hjelp av fire eksempler, forklar utvalgene
>     1. ordna utvalg med tilbakelegg,
>     2. ordna utvalg uten tilbakelegg,
>     3. uordna utvalg uten tilbakelegg,
>     4. uordna utvalg med tilbakelegg.

> [!hidden] 5.3 Medium Vurdering uke 5
> 1. Avgjør om situasjonene under kan tenkes som ordnede eller uordnede utvalg og om utvalgene er med eller uten tilbakelegg:
>     1. Til årsmøtet i et lag møter det ti personer. På hvor mange måter kan det velges formann, nestformann og kasserer?
>     2. I en klasse på 20 elever skal det velges ut en gruppe på 6. På hvor mange måter kan det gjøres på?
>     3. På hvor mange måter kan forskjellige tresifrede tall lages med sifrene 1, 2, 3, 4 og 6, der en kan gjenta gjenta sifre?
>     4. På en flervalgsprøve med åtte spørsmål er det tre alternativer på hvert spørsmål, der kun ett alternativ er rett. Hvor mange mulige forskjellige besvarelser kan man gi på prøven?
> 2. Ved hjelp av fire eksempler, forklar utvalgene
>     1. ordna utvalg med tilbakelegg,
>     2. ordna utvalg uten tilbakelegg,
>     3. uordna utvalg uten tilbakelegg,
>     4. uordna utvalg med tilbakelegg.

> [!hidden] 5.4 Medium 1
> Vi har et rutenett med $2 \times 5$ ruter. Vi skal først fargelegge fire ruter røde og så to gule.
> 1. Hvor mange måter kan vi gjøre det på?
> 2. Hvordan ville det blitt om vi først velger de to som skal være gule, og så de fire som skal være røde?
> 3. Hva om vi velger rutene som ikke skal fargelegges, så de fire som skal være røde?

> [!hidden] 5.4 Medium 2
> Du flipper en mynt 12 ganger og registrer om det blir kron eller mynt for hvert kast. 
> 1. Når du har kastet tolv ganger har du fått kron 5 ganger og mynt 7 ganger. På hvor mange måter kan dette ha skjedd (det vil si at for eksempel mynt 7 ganger på rad og så fem kron på rad er én måte og så videre)?
> 2. På hvor mange måter kan du enten få nøyaktig null, nøyaktig én eller nøyaktig to mynt på?
> 3. På hvor mange måter kan du få minst 3 mynt på?

> [!hidden] 5.4 Medium 3
> En lærer skal velge ut tre par til en komite. Det skal være tre par, en gutt og en jente i hvert par. Hvert av parene får en unik oppgave de skal ha ansvar for. Hvor mange måter kan læreren velge ut komiteen når det er 12 gutter og 15 jenter i klassen?

> [!hidden] 5.4 Medium 4
> En lærer skal ta med seg 16 elever på kino. Det er to av elevene, Henrik og André, som nekter å sitte på siden av hverandre. Hvor mange måter kan de 16 elevene sitte, slik at Henrik og André slipper å sitte på siden av hverandre?

> [!hidden] 5.4 Medium 5
> Du er lærer og skal dele elevene sine inn tilfeldige grupper for å jobbe på vertikale tavler. 
> 1. Det er seks elever og du skal dele de inn i to grupper på 3. Hvor mange måter kan dette gjøres på?
> 2. Det er ni elever og du skal dele de inn i tre grupper på 3. Hvor mange måter kan dette gjøres på?
> 3. Det er 24 elever og du skal dele de inn i tre grupper på 3. Hvor mange måter kan dette gjøres på?
> 4. Du har to elever, Henrik og André, som har kommet i en stor krangel i friminuttet og du har bestemt og holde de unna hverandre i timen. Derfor må Henrik og André to ikke havne på samme gruppe. Hvis det er 12 elever i klassen. På hvor mange måter kan du dele inn i fire grupper på 3, slik at Henrik og André ikke havner på samme gruppe?
> 5. Henrik og André blir venner igjen og håper at de kommer på gruppe sammen. I hvor mange av gruppesammensetningene av fire grupper på tre er André og Henrik på samme gruppe? 

> [!hidden] 5.4 Medium Vurdering uke 3
> Fem jenter er med i en kanonballturnering. Det er kun tre som skal spille hver omgang og de bestemmer seg for å trekke om hvem som skal spille neste omgang. De legger fem lapper i en hatt, der tre av hattene sier _Spille_. Deretter stiller de seg på rekke og trekker en etter en.
> 1. Avgjør hvor mange ulike lagoppstillinger de kan ende opp med?
> 2. Avgjør hvor mange av de ulike lagoppstillingene gir at førstemann i rekka får spille?
> 3. Avgjør hvor mange utfall som gir at andremann får lov til å spille?
> 4. Avgjør hvor mange utfall som gir at femtemann eller tredjemann får lov til å spille?

> [!hidden] 5.4 Medium Vurdering uke 4
> Du skal kaste en mynt seks ganger og noterer resultatene i rekkefølge. For eksempel kan et utfall være $MMMKKK$, altså tre først tre mynt og så tre kron.
> 1. Hvor mange mulige utfall finnes det?
> 2. Hvor mange mulige utfall er det som gir like mange kron, som mynt?
> 3. Hvor mange mulige utfall er det som inneholder minst en mynt?

> [!hidden] 5.4 Medium Vurdering uke 5
> En kortstokk består av 52 kort med 4 kort-typer (13 spar-kort, 13 kløver-kort, 13 hjerter-kort og 13 ruter-kort). Kortene i hver kort-type er nummerert fra 1 til 13 hvorav de tre høyeste kortene kalles bildekort og betegnes «knekt», «dame» og «konge». Du trekker **3 kort uten tilbakelegg** fra en kortstokk. Bruk disse opplysningene i de tre neste deloppgavene.
> 1. Forklar hvorfor det er $\frac{52\cdot 51\cdot 50}{3!} = 22100$ mulige kombinasjoner du kan trekke.
> 2. Hvor mange ulike måter kan vi trekke tre spar.
> 3. Hvor mange måter kan vi trekke minst ett bildekort?

> [!hidden] 5.4 Spicy 1
> En lærer skal ta med seg 16 elever på skolekino. Det er to av elevene, Henrik og André, som nekter å sitte på siden av hverandre. 
> 1. Hvor mange måter kan de 16 elevene sitte, slik at Henrik og André slipper å sitte på siden av hverandre?
> 2. I tillegg til Henrik og André, så er det to andre som begynner å krangle i mens læreren kjøper billetter. Hvis du skal ta hensyn til både André og Henrik, samtidig som du tar hensyn til de tre andre elevene. Hvor mange mulige måter å arrangere elevene har du? 

> [!hidden] 5.4 Spicy 2
> Du er lærer og skal dele elevene sine inn tilfeldige grupper for å jobbe på vertikale tavler. 
> 1. Det er 24 elever og du skal dele de inn i tre grupper på 3. Hvor mange måter kan dette gjøres på?
> 2. Du har to elever, Henrik og André, som har kommet i en stor krangel i friminuttet og du har bestemt og holde de unna hverandre i timen. Derfor må Henrik og André to ikke havne på samme gruppe. Hvis det er 12 elever i klassen. På hvor mange måter kan du dele inn i fire grupper på 3, slik at Henrik og André ikke havner på samme gruppe?
> 3. Henrik og André blir venner igjen og håper at de kommer på gruppe sammen. I hvor mange av gruppesammensetningene av fire grupper på tre er André og Henrik på samme gruppe? 
> 4. Det er kun 11 av de 12 elevene som møter opp. Du fjerner ett kort, slik at du får én gruppe på to og tre grupper på tre. Hvor mange ulike grupper, med én gruppe på to og tre grupper på tre, kan du lage?
> 5. Neste time er det kun 10 av de tolv elevene som møter. Du fjerner nå to kort, ett fra to grupper, slik at du skal lage to grupper på to og tre grupper på tre. Hvor mange forskjellige gruppesammensettinger kan du nå ende opp med?

> [!hidden] 5.4 Spicy 3
> Noen av studentene i MA-173 har overbevist seg om at det er nyttig å lære seg kombinatorikk for å bli god i poker. For å komme i gang, undersøker de noen grunnleggende situasjoner. <br><br>Man har alltid av 2 kort på hånden når man spiller poker. På slutten av et pokerspill er det alltid 5 kort på bordet. 
> 1. Hvor mange ulike hender med 2 kort kan man ha?
> 2. Når du har fått dine to kort på hendene. Hvor mange ulike kombinasjoner av fem kort på bordet kan dukke opp? <br><br>En pokerhånd består av fem kort.
> 3. Hvor mange ulike pokerhender finnes det?
> 4. En veldig god pokerhånd er fire like, da betyr det at du har fire like kort, samt ett ekstra kort. Hvor mange ulike pokerhender gir fire like?<br><br>I en kortstokk omtales ofte, spar, hjerter, kløver og ruter som de fire fargene i kortstokken. Kløver og spar er ofte sorte og hjerter og ruter er ofte røde. For å unngå misforståelser kommer vi til å bruke ordet farge, som de fire fargene forklart over.
> 5. En annen veldig god hånd er det man kaller en flush. Da har du fem kort i samme farge (for eksempel, hjerter to, hjerter 3, hjerter 6, hjerter 10 og hjerter knekt). Hvor mange ulike hender er en flush?
> 6. Du har to rutere på hånden, og det er kommet tre kort ut på bordet. To av disse er også rutere.  

> [!hidden] 5.4 Spicy Vurdering uke 3
> Du har skaffet deg en rar kortstokk med tolv kort. Det er
> -  fire kort, markert 1 til 4 er røde,
> -  fire kort, markert 1 til 4 er blå og 
> -  fire kort markert 1 til 4 er grønne. 
> 
> Du skal spille mot Henrik og dere trekker begge tre kort til hånden deres.
> 
> 1. Hvor mange ulike hender kan _du_ trekke?
> 2. Hvor mange ulike hender kan _du_ trekke som inneholder nøyaktig to blå kort?<br> <br>Når dere begge har trukket tre kort, sier vi at vi har et spill, der du har tre kort og Henrik har tre kort på hånden. Ulike hender fører til ulike spill.
> 3. Forklar at det er $\frac{12\cdot11\cdot10}{3!}\cdot \frac{9\cdot8\cdot7}{3!}$ ulike spill kan vi få.
> 4. Hvor mange ulike spill kan vi få, der minst én av dere har to røde kort på hånden?

> [!hidden] 5.4 Spicy Vurdering uke 4
> Du har en krukke med 10 baller. 5 er grønne som er nummerert 1-5, 3 er røde som er nummerert 6-8 og 2 er blå som er nummerert 9-10. Du skal trekke tre kuler og vi bryr oss ikke om rekkefølgen på kulene vi trekker ut
> 1. Hvor mange ulike utvalg kan man trekke?
> 2. Hvor mange utvalg kan vi trekke der vi har minst én grønn kule?
> 3. Hvor mange utvalg kan vi trekke der vi har minst to røde kuler?
> 4. Hvor mange utvalg kan vi trekke der vi kun trekker partall, og ikke har tre forskjellige farger?

> [!hidden] 5.4 Spicy Vurdering uke 5
> André drar på kino med familien sin, totalt fire personer. De andre går inn for å finne plassene sine, mens André skal kjøpe inn noe til filmen. I butikken selger de popkorn, baconsnacks, smågodt og sjokolade. I tillegg må han kjøpe med drikke til alle sammen. Der kan han velge mellom vann, cola, pepsi, fanta, sprite, iste eller slush.
> 1. Han skal ha med én spiselig rett tilbake til hver person. Han tar alt på et brett. Hvor mange forskjellige brett med spiselige retter kan André ta med seg tilbake?
> 
> André glemmer helt hva de andre skal ha. Det eneste han husker er at ingen skal ha noe av det samme. Han tenker, *Jaja, jeg får vel bare gjette, men kjøpe forskjellige ting. Det folk ikke vil ha får jeg ta selv.*
> 
> 2. I hvor mange av utvalgene han tar vil gjøre alle andre i familien fornøyd?
> 3. På hvor mange måter kan han velge ut noe slik at minst to av de andre blir fornøyd?

> [!hidden] 5.5 Mild 1
>  Ved hjelp av et eksempel forklar begrepene utfallsrom, utfall og hendelse. 

> [!hidden] 5.5 Mild 2
> Ved hjelp av et eksempel forklar hva som menes med en sannsynlighetsmodell. 

> [!hidden] 5.5 Mild 3
> Ved hjelp av et eksempel forklar hva som menes med en uniform sannsynlighetsmodell.

> [!hidden] 5.5 Medium 1 
> Alfa 7.14

> [!hidden] 5.5 Medium 2
> Alfa 7.15. Besvarelsen skal begrunnes ved å peke på definisjonen av en uniform sannsynlighetsmodell.

> [!hidden] 5.5 Medium 3
> Et forsøk skal utføres ved å kaste en mynt tre ganger og registrere om det blir kron eller mynt. Henrik setter opp utfallsrommet {tre kron,to kron og en mynt,en kron og to mynt,tre mynt}. Avgjør om dette gir opphav til en uniform sannsynlighetsmodell.

> [!hidden] 5.5 Medium 4
> André har kjøpt inn 6 lyspærer som han legger i en ekse slik at han slipper å måtte kjøpe nye hver gang en pære går. Uten å tenke seg om byttet André tre lyspærer, men puttet de gamle defekte lyspærene sammen med de nye. Neste gang skal han bytte to pærer og tar han bare to tilfeldige pærer ut fra esken. Sett opp et utfallsrom som gir en uniform sannsynlighetsmodell og avgjør, ved hjelp av modellen, hva sannsynligheten er for at André tar med seg en defekt pære.

> [!hidden] 5.5 Medium 5
> Du er på hytta og kaster fire femmere på første kast. Med to kast igjen bestemmer du deg for å gå for yatzy. Sett opp et utfallsrom som gir en uniform sannsynlighetsmodell og finn sannsynligheten for at du får yatzy ved hjelp av modellen.

> [!hidden] 5.6 Mild 1
> Forklar, ved hjelp av en passende illustrasjon, addisjonssetningen for sannsynligheter.

> [!hidden] 5.6 Medium 1
>  Du skal trekke et kort fra en kortstokk.
>  1. Hva er sannsynligheten for å trekke en hjerter eller trekke en dame? Lag en illustrasjon av problemet, som viser hvordan addisjonsprinsippet brukes.
>  2. Hva er sannsynligheten for å trekke en hjerter eller en spar? Lag en illustrasjon av problemet, som viser hvordan addisjonsprinsippet brukes.

> [!hidden] 5.6 Medium 2
> Du skal trekke to kort fra en kortstokk.
>    1. Hva er sannsynligheten for å trekke to hjerter, eller to bildekort? Lag en illustrasjon av problemet, som viser hvordan addisjonsprinsippet brukes.
>    2. Hva er sannsynligheten for å trekke to hjerter, eller trekke en femmer og en sekser? Lag en illustrasjon av problemet, som viser hvordan addisjonsprinsippet brukes.

> [!hidden] 5.7 Mild Forklar, ved hjelp av en passende illustrasjon, komplementsetningen i sannsynlighet.

> [!hidden] 5.7 Medium 1 
> Du skal trekke to kort fra en kortstokk.
>  1. Hva er sannsynligheten for å minst en hjerter? Lag en illustrasjon av problemet, som viser hvordan komplementsetningen brukes.
>  2. Hva er sannsynligheten for å enten få en hjerter, eller få et bildekort? Lag en illustrasjon av problemet, som viser hvordan komplementsetningen brukes.

> [!hidden] 5.7 Medium 2
> Du skal kaste en mynt fem ganger. Hva er sannsynligheten for at du får minst én mynt?

> [!hidden] 5.7 Medium 3
> Dersom det er lik sannsynlighet for å ha bursdag på alle dager i året. Hvor få mennesker kan det være i en gruppe slik at det fortsatt er 50% sannsynlig at minst to personer i gruppa har bursdag på samme dag?

> [!hidden] 5.8 Mild Forklare store talls lov.

> [!hidden] 5.8 Medium Undersøke og estimere sannsynligheter ved å bruke store talls lov.

> [!hidden] 5.9 Medium 1
> Anta at sannsynligheten for å få en gutt alltid er 1/2. I en familie som har to barn er det tre muligheter, to gutter, to jenter eller ett av hvert kjønn.
> 
> Eleven Per sier at hvis en velger en tilfeldig tobarnsfamilie er det 1/3 sjans for at de har to gutter. Avgjør om Per tenker rett. 
> - Pek på eventuelle misforståelser eller riktige oppfatninger. Hvis det er noen misforståelser må disse rettes opp slik at Per forstår hva som er feil.<br><br>

> [!hidden] 5.9 Medium 2
> André og Kristin planlegger å få fem barn.
> 1. Hva er sannsynligheten for at de får bare gutter?
> 2. Hva er sannsynligheten for at de får to jenter og tre gutter?
> 3. Hva er sannsynligheten for at de får minst 2 jenter?

> [!hidden] 5.9 Medium 3
> Vi har et rutenett med $2 \times 5$ ruter. Vi skal først fargelegge fire ruter røde og så to gule.
> 1. Hvor mange måter kan vi gjøre det på?
> 2. Hvordan ville det blitt om vi først velger de to som skal være gule, og så de fire som skal være røde?
> 3. Hva om vi velger rutene som ikke skal fargelegges, så de fire som skal være røde? 

> [!hidden] 5.9 Spicy 1
> I en vanlig kortstokk med 52 kort finnes det fire sorter, hjerter, ruter, kløver og spar. I hver sort er det 13 kort, kortene 1 til 10 i tillegg til en knekt, en dame og en konge. Når man spiller bridge får man en hånd bestående av 13 tilfeldige kort.
> 1. Hvor mange av alle de mulige bridgehendene består av nøyaktig åtte kløver?
> 2. Hvor mange ulike bridgehender med nøyaktige fem spar er det mulig å dele ut?
> 3. Hvor mange bridgehender med seks kort i en og samme farge finnes det?
> 4. Hva er sannsynligheten for å få ei slik hånd?

> [!hidden] 5.9 Spicy 2
> Vi trekker ut fem kort av en kortstokk på 52 kort.
> 1. Hva er sannsynligheten for at det er nøyaktig to spar blant de fem?
> 2. Hva er sannsynligheten for at alle dem fem kortene er kløver?
> 3. Hva er sannsynligheten for at ruter knekt er med?
> 4. Hvor stor sannsynlighet er det for at det er to kort med samme verdi hånden som deles ut?

> [!hidden] 5.9 Spicy 3
> Vurder sannsynligheten for hver av kombinasjonstypene du kan få i yatzy (ekskludert enere, toere,...., femmere og seksere).

> [!hidden] 5.9 Spicy 4
> I poker er det 10 forskjellige hender man kan få, rangert på følgende måte.
> 1. Royal straight flush
> 2. Straight flush
> 3. Fire like
> 4. Fult hus (3 like + par)
> 5. Flush (fem av samme sort)
> 6. Straight (fem på rad)
> 7. Tre like
> 8. To par
> 9. Ett par
> 10. Høyt kort <br><br>Vurder denne rangeringsordningen ved å avgjøre sannsynligheten for hver av hendene. 
