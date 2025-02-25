import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;

// Initialiser SendGrid seulement si la clé est présente
if (apiKey) {
  sgMail.setApiKey(apiKey);
}

interface SendGridErrorResponse {
  message: string;
  code: number;
  response?: {
    body: unknown;
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, prenom, telephone, email, dateDepart, dateRetour, vehicule } =
      body;

    if (
      !nom ||
      !prenom ||
      !telephone ||
      !email ||
      !dateDepart ||
      !dateRetour ||
      !vehicule
    ) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.RECIPIENT_EMAIL || "contact@plpernotlocation.fr",
      from: {
        email: process.env.SENDER_EMAIL || "contact@plpernotlocation.fr",
        name: "PL PERNOT LOCATION",
      },
      subject: `Nouvelle demande de réservation de ${nom} ${prenom}`,
      text: `
        Nouvelle demande de réservation de: ${nom} ${prenom}
        Email: ${email}
        Téléphone: ${telephone}
        Date de départ: ${dateDepart}
        Date de retour: ${dateRetour}
        Véhicule souhaité: ${vehicule}
      `,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Date de départ:</strong> ${dateDepart}</p>
        <p><strong>Date de retour:</strong> ${dateRetour}</p>
        <p><strong>Véhicule souhaité:</strong> ${vehicule}</p>
      `,
    };

    try {
      await sgMail.send(msg);

      return NextResponse.json({ message: "Demande envoyée avec succès" });
    } catch (sendError: unknown) {
      if (
        sendError &&
        typeof sendError === "object" &&
        "message" in sendError &&
        "code" in sendError
      ) {
        const typedError = sendError as SendGridErrorResponse;

        return NextResponse.json(
          {
            message: "Erreur lors de l'envoi de la demande",
            details: `SendGrid: ${typedError.message}`,
          },
          { status: typedError.code || 500 }
        );
      }
    }
  } catch {
    return NextResponse.json(
      { message: "Erreur lors du traitement de la requête" },
      { status: 500 }
    );
  }
}
