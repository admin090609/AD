import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./component/NavBar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>A&D</title>
        <meta
          name="description"
          content="Crește-ți călătoria de fitness la A&D – destinația ta pentru putere, cardio și wellness. Explorați facilitățile noastre de ultimă generație, formatorii experți și clasele diverse. Alăturați-vă nouă astăzi și începeți să vă sculptați o persoană mai sănătoasă!"
        />
        
        <meta
          name="keywords"
          content="Sală de gimnastică
Sală de fitness
Club de sănătate
Antrenament personal
Antrenamentul de forta
Antrenamente cardio
Fitness de grup
Cursuri de yoga
Studio de Pilates
CrossFit
Ridicare de greutăți
Fitness funcțional
Programe de wellness
Consiliere nutrițională
Culturism
Cursuri de exerciții
Ciclism în interior
Antrenament atletic
HIIT (antrenament cu intervale de intensitate ridicată)
Abonament la sală
Comunitatea de fitness
Rutine de antrenament
Obiective de fitness
Pierdere în greutate
Câștig de mușchi
Reabilitare
Echipament de sala
Antrenori de fitness
Exercițiul de motivație
Provocări de fitness
Blog de fitness
Sfaturi de fitness
Stil de viata sanatos
Coaching de wellness
Cursuri de fitness
Programe de fitness
Facilități de gimnastică
Sauna si baie de aburi
Piscină
Evaluarea fitnessului
Suplimente nutritive
Îmbrăcăminte fitness
Analiza compoziției corporale
Antrenament pentru flexibilitate
Evenimente de fitness
Obiective de fitness
Gestionarea greutății
Coaching de wellness
Forță și condiționare
Exercitii aerobice
Transformarea corpului
Echipament de antrenament
Viață sănătoasă
Sală de sport lângă mine
Antrenament personalizat
Cursuri de fitness de grup
Instructori atestați
Planuri de antrenament
Inspirație pentru fitness
Exercițiul de motivație
Beneficii sală de sport
Rutine de fitness
Performanță atletică
Antrenamentul funcțional
Puterea nucleului
Antrenament de rezistenta
Sculptura corpului
Tehnici de exerciții
Servicii de wellness
Evaluări de fitness
Servicii de recuperare
Fitness minte-corp
Antrenament încrucișat
Gestionarea greutății
Pozitivitatea corpului
Ghid de nutriție
Câștigări de forță
Sănătatea cardiovasculară
Cultura sală de sport
Provocări de fitness
Comunitatea de gimnastică
Sanatate si fitness
Atmosfera de sala de sport
Antrenament sportiv
Prevenirea vătămărilor
Facilități de gimnastică
Mâncat sănătos
Fitness online
Antrenamente virtuale
Aplicații de fitness
Atingerea obiectivelor de fitness
Sesiuni de antrenament de grup
Cursuri de gimnastică
Opțiuni de membru
Resurse de wellness
Evaluări de fitness
Antrenamente personalizate
Coaching stil de viață
Povești de succes în fitness
Transformări de fitness
Beneficii sală de sport
Tehnici de antrenament
Locație sală de sport
Motivația fitness
Seminarii de wellness
Antrenament specific sportului
Promoții la sală
Forță și flexibilitate
Planuri de nutriție
Progresul exercițiului
Educație fitness
Tehnici de haltere
Mișcare funcțională
Întreținerea echipamentului de gimnastică
Conexiune corp-minte
Obiceiuri sănătoase
Recuperare după antrenament
Eticheta la sală
Responsabilitate de fitness
Varietate de antrenament
Stilul de viață activ
Fitness pentru toate vârstele
Fitness pentru incepatori
Antrenamentul sportivului
Obiective de wellness
Sprijinul comunității de fitness
Motivația de fitness în grup
Măsuri de siguranță la sala de sport
Planuri de fitness personalizate
Programe de coaching pentru wellness
Exercițiu atent
Consecvența antrenamentului
Provocări și evenimente de fitness
Succesul transformării corpului
Alegeri de nutriție sănătoasă
Alegerea echipamentelor de fitness
Rutine de antrenament la sală
Bunăstarea fizică
Bunastarea mentala
Fitness pentru seniori
Cursuri de fitness online
Recomandări aplicații de fitness
Forma și tehnica exercițiului
Urmărirea fitnessului
Strategii de pierdere în greutate
Strategii de dezvoltare musculară
Îmbunătățirea compoziției corporale
Fitness pentru programele aglomerate
Fitness pentru obiective specifice
Angajamentul comunității de fitness"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}