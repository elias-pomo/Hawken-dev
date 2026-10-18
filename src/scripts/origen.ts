// Si la visita llega con ?ref=..., el mensaje de WhatsApp dice de dónde viene la persona.
// Así Elias sabe qué canal trae consultas sin usar cookies ni herramientas de seguimiento.
// Uso: link de la bio de Instagram → https://www.hawkendev.com/?ref=ig ; mensajes de prospección → ?ref=wa

const FRASES: Record<string, string> = {
  ig: 'te encontré por Instagram',
  wa: 'me pasaron tu web por WhatsApp',
  qr: 'escaneé tu QR',
  google: 'te encontré en Google',
};

const CLAVE = 'hawken-ref';
const SALUDO = 'Hola Elias, ';

const leerOrigen = (): string | null => {
  const ref = new URLSearchParams(location.search).get('ref')?.toLowerCase() ?? null;
  try {
    if (ref && FRASES[ref]) sessionStorage.setItem(CLAVE, ref);
    return sessionStorage.getItem(CLAVE);
  } catch {
    return ref && FRASES[ref] ? ref : null; // sessionStorage bloqueado (modo privado): solo esta página
  }
};

const conOrigen = (texto: string, frase: string) => {
  if (!texto.startsWith(SALUDO) || texto.includes(frase)) return texto;
  const resto = texto.slice(SALUDO.length);
  return `${SALUDO}${frase}. ${resto.charAt(0).toUpperCase()}${resto.slice(1)}`;
};

export const aplicarOrigen = () => {
  const ref = leerOrigen();
  if (!ref) return;
  const frase = FRASES[ref];
  document.querySelectorAll<HTMLAnchorElement>('a[href^="https://wa.me/"]').forEach((a) => {
    const url = new URL(a.href);
    const texto = url.searchParams.get('text');
    if (!texto) return;
    url.searchParams.set('text', conOrigen(texto, frase));
    a.href = url.toString();
  });
};
