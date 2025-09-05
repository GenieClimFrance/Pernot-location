import { NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

const apiKey = process.env.BREVO_API_KEY;
if (!apiKey) {
  console.warn("Clé API Brevo manquante");
}

// Configuration Brevo
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey || "");

interface BrevoErrorResponse {
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

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [
      { email: process.env.RECIPIENT_EMAIL || "contact@pernotlocation.fr" },
    ];
    sendSmtpEmail.sender = {
      email: process.env.SENDER_EMAIL || "contact@pernotlocation.fr",
      name: "PL PERNOT LOCATION",
    };
    sendSmtpEmail.subject = `Nouvelle demande de réservation de ${nom} ${prenom}`;
    sendSmtpEmail.textContent = `
      Nouvelle demande de réservation de: ${nom} ${prenom}
      Email: ${email}
      Téléphone: ${telephone}
      Date de départ: ${dateDepart}
      Date de retour: ${dateRetour}
      Véhicule souhaité: ${vehicule}
    `;
    sendSmtpEmail.htmlContent = `
      <h2>Nouvelle demande de réservation</h2>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Prénom:</strong> ${prenom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${telephone}</p>
      <p><strong>Date de départ:</strong> ${dateDepart}</p>
      <p><strong>Date de retour:</strong> ${dateRetour}</p>
      <p><strong>Véhicule souhaité:</strong> ${vehicule}</p>
    `;

    try {
      await apiInstance.sendTransacEmail(sendSmtpEmail);

      return NextResponse.json({ message: "Demande envoyée avec succès" });
    } catch (sendError: unknown) {
      if (
        sendError &&
        typeof sendError === "object" &&
        "message" in sendError &&
        "code" in sendError
      ) {
        const typedError = sendError as BrevoErrorResponse;

        return NextResponse.json(
          {
            message: "Erreur lors de l'envoi de la demande",
            details: `Brevo: ${typedError.message}`,
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
