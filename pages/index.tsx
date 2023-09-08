import React from "react";
import Slider from "./component/Slider";
import Head from "next/head";
import PopupButton from "./component/Orar";

export default function Home() {
  function scrollToSection(Abonamente: string) {
    const element = document.getElementById(Abonamente);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div>
      <Head>
        <title>A&D</title>
        <link rel="icon" href="logo.png" type="image/x-icon"/>
        <link rel="icon" href="favicon.ico" type="image/x-icon"/>
        <meta
          name="description"
          content="Crește-ți călătoria de fitness la A&D - destinația ta pentru putere, cardio și wellness. Explorați facilitățile noastre de ultimă generație, formatorii experți și clasele diverse. Alăturați-vă nouă astăzi și începeți să vă sculptați o persoană mai sănătoasă."
        />
        <meta
          name="google-site-verification"
          content="rfmUZHof7-SwUw3HEMPxxrCLnf9SD8_c4TPcKpWzvG4"
        />
        <meta
          name="keywords"
          content="Sală de gimnastică,
          a&d,
          A&D,
          ad sala,
          AD sala,
Sală de fitness,
Club de sănătate,
Antrenament personal,
Antrenamentul de forta,
Antrenamente cardio,
Fitness de grup,
Cursuri de yoga,
Studio de Pilates,
CrossFit,
Ridicare de greutăți,
Fitness funcțional,
Programe de wellness,
Consiliere nutrițională,
Culturism,
Cursuri de exerciții,
Ciclism în interior,
Antrenament atletic,
HIIT (antrenament cu intervale de intensitate ridicată),
Abonament la sală,
Comunitatea de fitness,
Rutine de antrenament,
Obiective de fitness,
Pierdere în greutate,
Câștig de mușchi,
Reabilitare,
Echipament de sala,
Antrenori de fitness,
Exercițiul de motivație,
Provocări de fitness,
Blog de fitness,
Sfaturi de fitness,
Stil de viata sanatos,
Coaching de wellness,
Cursuri de fitness,
Programe de fitness,
Facilități de gimnastică,
Sauna si baie de aburi,
Piscină,
Evaluarea fitnessului,
Suplimente nutritive,
Îmbrăcăminte fitness,
Analiza compoziției corporale,
Antrenament pentru flexibilitate,
Evenimente de fitness,
Obiective de fitness,
Gestionarea greutății,
Coaching de wellness,
Forță și condiționare,
Exercitii aerobice,
Transformarea corpului,
Echipament de antrenament,
Viață sănătoasă,
Sală de sport lângă mine,
Antrenament personalizat,
Cursuri de fitness de grup,
Instructori atestați,
Planuri de antrenament,
Inspirație pentru fitness,
Exercițiul de motivație,
Beneficii sală de sport,
Rutine de fitness,
Performanță atletică,
Antrenamentul funcțional,
Puterea nucleului,
Antrenament de rezistenta,
Sculptura corpului,
Tehnici de exerciții,
Servicii de wellness,
Evaluări de fitness,
Servicii de recuperare,
Fitness minte-corp,
Antrenament încrucișat,
Gestionarea greutății,
Pozitivitatea corpului,
Ghid de nutriție,
Câștigări de forță,
Sănătatea cardiovasculară,
Cultura sală de sport,
Provocări de fitness,
Comunitatea de gimnastică,
Sanatate si fitness,
Atmosfera de sala de sport,
Antrenament sportiv,
Prevenirea vătămărilor,
Facilități de gimnastică,
Mâncat sănătos,
Fitness online,
Antrenamente virtuale,
Aplicații de fitness,
Atingerea obiectivelor de fitness,
Sesiuni de antrenament de grup,
Cursuri de gimnastică,
Opțiuni de membru,
Resurse de wellness,
Evaluări de fitness,
Antrenamente personalizate,
Coaching stil de viață,
Povești de succes în fitness,
Transformări de fitness,
Beneficii sală de sport,
Tehnici de antrenament,
Locație sală de sport,
Motivația fitness,
Seminarii de wellness,
Antrenament specific sportului,
Promoții la sală,
Forță și flexibilitate,
Planuri de nutriție,
Progresul exercițiului,
Educație fitness,
Tehnici de haltere,
Mișcare funcțională,
Întreținerea echipamentului de gimnastică,
Conexiune corp-minte,
Obiceiuri sănătoase,
Recuperare după antrenament,
Eticheta la sală,
Responsabilitate de fitness,
Varietate de antrenament,
Stilul de viață activ,
Fitness pentru toate vârstele,
Fitness pentru incepatori,
Antrenamentul sportivului,
Obiective de wellness,
Sprijinul comunității de fitness,
Motivația de fitness în grup,
Măsuri de siguranță la sala de sport,
Planuri de fitness personalizate,
Programe de coaching pentru wellness,
Exercițiu atent,
Consecvența antrenamentului,
Provocări și evenimente de fitness,
Succesul transformării corpului,
Alegeri de nutriție sănătoasă,
Alegerea echipamentelor de fitness,
Rutine de antrenament la sală,
Bunăstarea fizică,
Bunastarea mentala,
Fitness pentru seniori,
Cursuri de fitness online,
Recomandări aplicații de fitness,
Forma și tehnica exercițiului,
Urmărirea fitnessului,
Strategii de pierdere în greutate,
Strategii de dezvoltare musculară,
Îmbunătățirea compoziției corporale,
Fitness pentru programele aglomerate,
Fitness pentru obiective specifice,
Angajamentul comunității de fitness"
        />
      </Head>
      </div>
      <div></div>
      <div className="justify-center flex items-center flex-col text-center w-screen h-[80vh]">
        <p className="text-4xl sm:text-6xl leading-[1.15] font-extrabold text-white header">
          Fitnessul este o călătorie <br />
          <span className="bg-cover bg-clip-text text-transparent bg-gradient-to-br from-[#f9333a] to-[#c03167]">
            Hai
          </span>{" "}
          să începem!
        </p>
        <div className="flex group">
          <button
            className="bg-gradient-to-br from-[#f9333a] via-[#c03167] to-[#E77CA4] py-4 px-7 rounded-md mt-5 border-2 text-white mr-4 header1 group-hover:text-black hover:transition-all duration-300 border-[#c03167] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white font-public"
            onClick={() => scrollToSection("Abonamente")}
            id="leftButton"
          >
            Vezi Abonamente
          </button>
          <PopupButton />
        </div>
      </div>
      <div className="absolute inset-0 z-[-5] overflow-hidden">
        <video
          width="100%"
          height="100vh"
          className="w-full h-full object-cover z-[-5]"
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-60 z-0"></div>
      </div>
      <Slider />
    </>
  );
}
