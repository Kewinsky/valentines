// app/review/route.js (for Next.js App Router)
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { date, food, dessert, entertainment } = await req.json();

    if (!date || !food || !dessert || !entertainment) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Podsumowanie wyborów na randkę",
      text: `
        Data: ${date}
        Jedzenie: ${food}
        Deser: ${dessert}
        Rozrywka: ${entertainment}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "E-mail wysłany pomyślnie!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd przy wysyłaniu e-maila", error);
    return new Response(JSON.stringify({ message: "Wystąpił błąd" }), {
      status: 500,
    });
  }
}
