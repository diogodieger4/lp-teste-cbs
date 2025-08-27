export default function handler(req, res) {
  res.status(200).json({
    message: process.env.NEXT_PUBLIC_LP_MESSAGE || "Mensagem padrão local 🚧",
  });
}
