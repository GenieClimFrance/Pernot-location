function page() {
  return (
    <div className="flex flex-col gap-6 px-20 pb-20 bg-secondary text-white font-roboto">
      <h1 className="text-4xl font-bold mb-8 pt-40">
        CONDITIONS GÉNÉRALES DE LOCATION
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Article 1 – Champ d&apos;application
        </h2>
        <p>
          Les présentes conditions générales régissent les relations entre le
          Locataire et le Loueur. Toute commande implique de la part du
          Locataire l&apos;acceptation sans réserve des présentes. Il ne pourra
          y être dérogé que par des conditions particulières signées par les
          deux parties. Le contrat de location et le cas échéant le bon de
          livraison sont signés par les deux parties lors de la mise à
          disposition. À défaut, tout commencement d&apos;exécution du contrat
          vaut acceptation des présentes conditions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Article 2 – Conditions requises pour louer
        </h2>
        <p>
          Pour chaque location un contrat est rempli en bonne et due forme et
          signé par le Loueur et le Locataire préalablement à la prise en charge
          du matériel par le Locataire. Le Locataire devra être âgé d&apos;au
          moins 25 ans. Si le matériel loué est un véhicule terrestre à moteur
          qui requiert pour sa conduite le permis de conduire, le Locataire
          devra être titulaire dudit permis depuis plus d&apos;un an.
        </p>
        <p className="mt-2">
          Le Loueur se réserve la possibilité de demander au client de lui
          présenter certains documents (pièce d&apos;identité, permis de
          conduire, justificatif de domicile, etc.) dont une copie pourra être
          conservée.
        </p>
        <p className="mt-2">
          Un dépôt de garantie est demandé au Locataire pendant la durée de la
          location. Il est encaissé et restitué au terme de cette dernière, dès
          lors que la facture inhérente à la location proprement dite est
          intégralement réglée et qu&apos;un délai de dix jours s&apos;est
          écoulé en cas de paiement par chèque.
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">
            Cautions demandées par le loueur :
          </h3>
          <p className="mb-2">
            La caution sera restituée au locataire 10 jours après la restitution
            de la voiture et de l&apos;état des lieux. Aucune caution ne sera
            exigée pour une location avec chauffeur.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>PORSCHE : 7 500 euros</li>
            <li>LAMBORGHINI : 15 000 euros</li>
            <li>AUDI : 10 000 euros</li>
            <li>URUS : 15 000 euros</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">
            Paiement de la location :
          </h3>
          <p>Par carte bancaire et virement bancaire</p>
        </div>

        <p className="mt-4">
          Location possible en Nouvelle Aquitaine et dans toutes la France, sur
          demande et devis personnalisé.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Article 3 – Définition du matériel loué
        </h2>
        <p>
          Le matériel objet de la location est défini de façon précise, ou
          identifié dans les conditions particulières de location (offre, bon de
          commande, bon de livraison, etc.).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Article 4 – Durée de la location
        </h2>
        <p>
          La durée de la location est fixée par les conditions particulières de
          location. La location débute au jour où le Loueur met à la disposition
          du Locataire le matériel. Elle prend fin au jour de la restitution du
          matériel telle que définie à l&apos;article 12 des présentes
          conditions générales. La location peut se renouveler, après accord
          écrit des parties.
        </p>
      </section>

      {/* Continuer avec les autres articles de la même manière */}

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Article 13 – Clause résolutoire
        </h2>
        <p>
          En cas d&apos;inexécution par le Locataire d&apos;une obligation à sa
          charge, le Loueur pourra résilier de plein droit le contrat de
          location, par lettre recommandée avec accusé de réception, 8 jours
          après l&apos;envoi d&apos;une lettre de mise en demeure par lettre
          recommandée avec accusé de réception restée sans effet. Dans ce cas,
          réception restée sans effet. Dans ce cas, le Locataire devra,
          immédiatement et à ses frais, restituer le matériel au Loueur. Il
          reste devoir l&apos;intégralité des loyers à échoir jusqu&apos;au
          terme du contrat. Le Locataire, qui n&apos;a plus le droit de se
          servir du matériel, en reste responsable jusqu&apos;à sa restitution
          et en devient dépositaire au sens de l&apos;article 1915 du Code
          Civil.
        </p>
      </section>
    </div>
  );
}

export default page;
