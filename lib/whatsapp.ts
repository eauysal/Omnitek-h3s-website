// WhatsApp numarası ve hazır mesaj tek yerde: yüzen buton (app/WhatsAppButton.tsx) ve form sonrası ekranı kullanır.
// Numara başında 90 ile, sıfırsız. Mesaj Türkçe kalır (alıcı Türkçe okuyor), site dili değişse de.
export const WHATSAPP_NUMBER = "905369202214"

export const WHATSAPP_MESSAGE =
  "Merhaba Omnitek, işletmem/şubelerim için Wi-Fi pazarlama ve güvenlik (H3S) çözümleri hakkında bilgi almak ve görüşme planlamak istiyorum."

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
