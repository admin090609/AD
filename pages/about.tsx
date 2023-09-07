import Head from "next/head";
import Image from "next/image";
import React from "react";
import bifa from "./image/mark.png";
import ph from "./image/about_ph.png";

const About = () => {
  return (
    <div>
     <Head>
        <title>A&D</title>
        <link rel="icon" href="logo.png" />
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
      <div className="flex flex-col sm:flex-row justify-center mb-10 mt-10 items-center">
        <div className="md:max-w-[450px] lg:max-w-[600px] font-public p-6 sm:p-0">
          <div className="sm:mt-10 mt-0">
            <h1 className=" text-[#FEFEFE] text-4xl font-bold">
              De ce trebuie să alegi A&D
            </h1>
          </div>
          <div className="mt-10">
            <div className="flex items-center">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-white text-2xl ">
                Antrenament Personalizat
              </h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              Sala dispune de antrenori specializați în antrenament
              personalizat, care creează programe adaptate fiecărui membru.
              Aceștia oferă îndrumare, monitorizare și motivație pentru
              obținerea rezultatelor dorite.
            </p>
            <div className="flex items-center mt-6">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-white text-2xl"> Echipamente Moderne</h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              Sala modernă de fitness oferă echipamente de ultimă generație
              precum benzi de alergat, biciclete eliptice, steppere, aparate de
              forță și greutăți libere, acoperind o gamă variată de opțiuni
              pentru antrenamentul cardiovascular, de forță și dezvoltarea
              musculară.
            </p>
            <div className="flex items-center mt-6">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-[#F1F1F2] text-2xl">
                {" "}
                Vestiare și dușuri
              </h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              Lângă sala de sport sunt vestiare separate pentru bărbați și
              femei, cu dulapuri pentru depozitarea obiectelor personale și a
              hainelor. Există și dușuri pentru igienizare după antrenament.
            </p>
            <div className="flex items-center mt-6">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-white text-2xl">
                {" "}
                Supraveghere și asistență
              </h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              În sală, personal instruit oferă asistență și supraveghere în
              timpul antrenamentelor, garantând respectarea regulilor de
              siguranță și utilizarea corectă a echipamentelor.
            </p>
          </div>
        </div>
        <div className="sm:w-[35%] w-[70%] mt-10">
          <Image src={ph} alt="ab-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
