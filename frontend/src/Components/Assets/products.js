import blackshark_1 from "./razer-blackshark-v2-pro.png";
import viper_v2_pro_1 from "./razer-viper-v2-pro.png";
import barracuda_x_plus_1 from "./razer-barracuda-x-plus.png";
import deathadder_v3_pro_1 from "./razer-deathadder-v3-pro.png";
import huntsman_mini_1 from "./razer-huntsman-mini.png";
import g_pro_superlight_1 from "./logitech-g-pro-x-superlight.png";
import g_pro_wireless_1 from "./logitech-g-pro-x-lightspeed.png";
import logitech_g305_wireless_1 from "./logitech-g305-wireless.png";
import logitech_g432_1 from "./logitech-g432-gaming-headset.png";
import logitech_g502_wireless_1 from "./logitech-g502-lightspeed.png";
import logitech_g915_tkl_wireless_1 from "./logitech-g915-tkl-lightspeed.png";
import cloud3_wireless_1 from "./hyperx-cloud-3-wireless.png";
import pulsefire_haste_1 from "./hyperx-pulsefire-haste.png";
import corsair_k100_1 from "./corsair-k100-rgb.png";
import corsair_k60_rgb_1 from "./corsair-k60-rgb-pro.png";
import corsair_hs55_1 from "./corsair-hs55-wireless.png";
import corsair_k70_1 from "./corsair-k70-bluetooth.png";
import astro_a50_1 from "./astro-gaming-a50.png";
import ducky_3_1 from "./ducky-one-3.png";
import k530_pro_draconic_1 from "./redragon-k530-pro-draconic.png";
import arctis_1_1 from "./steelseries-arctis-1.png";
import g_pro_superlight_2_1 from "./logitech-g-pro-x-superlight-2.png";
import viper_v3_1 from "./razer-viper-v3-hyperspeed.png";
import virtuoso_se_1 from "./corsair-virtuoso-rgb-wireless-se.png";
import arctis_nova_pro_1 from "./steelseries-arctis-nova-pro.png";

let products = [
  {
    id: 1,
    name: "Logitech G Pro X Superlight",
    brand: "Logitech",
    category: "mouse",
    image: [g_pro_superlight_1],
    new_price: 197.99,
    old_price: 219.99,
    description:
      "Get the upper hand on the competition with the Logitech G Pro X Superlight wireless gaming mouse. Designed in collaboration with top esports pros, it's ultra-lightweight at 63 grams and features low-latency LIGHTSPEED wireless connectivity for reliable, split-second responsiveness.",
  },
  {
    id: 2,
    name: "Razer Deathadder V3 Pro",
    brand: "Razer",
    category: "mouse",
    image: [deathadder_v3_pro_1],
    new_price: null,
    old_price: 189.99,
    description:
      "Outperform your opponents with the Razer DeathAdder V3 Pro wireless gaming mouse. This right-handed mouse features an ultra-lightweight, ergonomic construction for incredible speed and comfort, with a 30000 DPI sensor for impressive responsiveness and control.",
  },
  {
    id: 3,
    name: "Razer Viper V2 Pro",
    brand: "Razer",
    category: "mouse",
    image: [viper_v2_pro_1],
    new_price: null,
    old_price: 189.99,
    description:
      "With the Razer Viper Pro wireless gaming mouse, there’s now nothing holding you back. Equipped with a 3200DPI optical sensor, it features a 1 onboard profile which is based off your last used Razer Synapse profile—including custom DPI settings, button configs, and more.",
  },
  {
    id: 4,
    name: "HyperX Cloud III Wireless",
    brand: "HyperX",
    category: "headset",
    image: [cloud3_wireless_1],
    new_price: 194.99,
    old_price: 227.99,
    description:
      "Get deeper immersion with the detailed soundscapes of the HyperX Cloud III wireless gaming headset. Its angled 53mm drivers with DTS Headphone:X Spatial Audio technology give you premium grade audio while the 10mm mic ensures clear communication with your teammates.",
  },
  {
    id: 5,
    name: "Logitech G Pro X Lightspeed",
    brand: "Logitech",
    category: "headset",
    image: [g_pro_wireless_1],
    new_price: null,
    old_price: 249.99,
    description:
      "Get your game on with superior-quality audio when you wear the Logitech Pro X LIGHTSPEED wireless gaming headset. With up to 20 hours of battery life and a 15-metre wireless range, this headset gives you convenience and mobility.",
  },
  {
    id: 6,
    name: "Corsair HS55 Wireless",
    brand: "Corsair",
    category: "headset",
    image: [corsair_hs55_1],
    new_price: 99.99,
    old_price: 134.99,
    description:
      "Powered by custom-tuned neodymium drivers, the Corsair HS55 wireless gaming headset includes Dolby 7.1 Surround Sound that provides deeper immersion in your games. It connects wirelessly over Bluetooth and its battery can last for a whole day.",
  },
  {
    id: 7,
    name: "Razer Barracuda X Plus",
    brand: "Razer",
    category: "headset",
    image: [barracuda_x_plus_1],
    new_price: null,
    old_price: 124.99,
    description:
      "The Razer Barracuda X Plus gaming headset is built for both immersive home gaming and seamless on-the-go audio. Designed for multi-platform gaming and mobile entertainment, this 4-in-1 USB-C wireless headset offers true versatility and freedom backed by long-lasting comfort, powerful drivers, and a crystal-clear mic.",
  },
  {
    id: 8,
    name: "Astro Gaming A50",
    brand: "Astro",
    category: "headset",
    image: [astro_a50_1],
    new_price: null,
    old_price: 399.99,
    description:
      "Upgrade your gaming experience with this Logitech G A50 X wireless gaming headset. It is equipped with Pro-G Graphene audio drivers for extraordinary sound clarity and reproduction, while the Pro-grade lightspeed wireless ensures sophisticated wireless performance.",
  },
  {
    id: 9,
    name: "Razer Huntsman Mini",
    brand: "Razer",
    category: "keyboard",
    image: [huntsman_mini_1],
    new_price: 159.99,
    old_price: 174.99,
    description:
      "Surpass your enemies with the great speed and accuracy of this Razer Huntsman Mini Mechanical gaming keyboard. Equipped with advanced Clicky Optical switches, this accessory offers great tactile feedback with ultra-fast actuation in intense gameplay.",
  },
  {
    id: 10,
    name: "Corsair K70 Mini",
    brand: "Corsair",
    category: "keyboard",
    image: [corsair_k70_1],
    new_price: 199.99,
    old_price: 260,
    description:
      "With precision, power, and performance, the Corsair K70 Pro Mini Bluetooth mechanical gaming keyboard sets you on the path to victory. It features 2.4GHz and Bluetooth for wireless connectivity and Cherry MX red mechanical keys for smooth and responsive keystrokes.",
  },
  {
    id: 11,
    name: "Razer Blackshark V2 Pro",
    brand: "Razer",
    category: "headset",
    image: [blackshark_1],
    new_price: 179.99,
    old_price: 274.99,
    description:
      "Get a competitive edge to take on the opponents with the Razer Blackshark V2 Pro gaming headset. With its 2.4GHz connection, you'll experience ultra-low latency gaming like never before.",
  },
  {
    id: 12,
    name: "Logitech G305 Wireless",
    brand: "Logitech",
    category: "mouse",
    image: [logitech_g305_wireless_1],
    new_price: null,
    old_price: 59.99,
    description:
      "Defeat your enemies with ease when you play with the Logitech G305 optical gaming mouse. The G305 is loaded with HERO sensor 12,000 DPI performance and LIGHTSPEED wireless 1 ms connectivity.",
  },
  {
    id: 13,
    name: "Logitech G432",
    brand: "Logitech",
    category: "headset",
    image: [logitech_g432_1],
    new_price: 69.99,
    old_price: 99.99,
    description:
      "Immerse yourself in the game with the Logitech G432 gaming headset. Boasting powerful 50mm drivers and DTS Headphone:X 2.0 surround sound, this headset delivers rich sound with detailed clarity so you don't miss a thing.",
  },
  {
    id: 14,
    name: "Redragon K530 Pro Draconic",
    brand: "Redragon",
    category: "keyboard",
    image: [k530_pro_draconic_1],
    new_price: 79.99,
    old_price: 84.99,
    description:
      "Upgraded K530 PRO. The transformative innovation with 99.8%+ switches compatible free-mod hot swappable Redragon keyboard is available now. Tri-mode connection technology, USB-C wired, BT 3.0/5.0 & 2.4Ghz wireless modes. Easy to toggle among 3 different wireless devices via side switch (2.4Ghz/BT1/BT2). Dynamic 13 presets illumination modes.",
  },
  {
    id: 15,
    name: "Logitech G502 Lightspeed",
    brand: "Logitech",
    category: "mouse",
    image: [logitech_g502_wireless_1],
    new_price: 169.99,
    old_price: 199.99,
    description:
      "Play better with the Logitech G502 LIGHTSPEED gaming mouse. It brings you superfast LIGHTSPEED wireless, a 1ms response, and POWERPLAY compatibility. Eleven programmable buttons, 16.8 million colours, and 6 adjustable, configurable weights make the mouse uniquely yours.",
  },
  {
    id: 16,
    name: "Ducky One 3",
    brand: "Ducky",
    category: "keyboard",
    image: [ducky_3_1],
    new_price: null,
    old_price: 184.99,
    description:
      "The new Ducky One 3 is here! Featuring Ducky's all new QUACK Mechanics design philosophy which further elevates the brand's prominent attributes - featuring a fully hot-swappable PCB, great acoustics, true PBT keycaps, and more!",
  },
  {
    id: 17,
    name: "SteelSeries Arctis 1",
    brand: "SteelSeries",
    category: "headset",
    image: [arctis_1_1],
    new_price: 79.99,
    old_price: 119.99,
    description:
      "Experience life-like audio in every game with the SteelSeries Arctis 1 gaming headset. It offers high-quality sound and a convenient wireless connection to your PC, all in a sleek design. It's designed for PC, PS5, PS4, Switch, and Android thanks to an innovative USB-C dongle design, making it perfect for gaming at home or on the go with a sleek lightweight design and Arctis quality.",
  },
  {
    id: 18,
    name: "Logitech G915 TKL Lightspeed",
    brand: "Logitech",
    category: "keyboard",
    image: [logitech_g915_tkl_wireless_1],
    new_price: null,
    old_price: 319.99,
    description:
      "Boost your gaming performance with this Logitech G915 TKL keyboard. In a slim and durable design, this tenkeyless gaming keyboard has low-profile mechanical switches that offer all the superior capabilities of a traditional switch, but at just half the height.",
  },
  {
    id: 19,
    name: "Corsair K100 RGB Optical-Mechanical Gaming Keyboard",
    brand: "Corsair",
    category: "keyboard",
    image: [corsair_k100_1],
    new_price: null,
    old_price: 349.99,
    description:
      "The CORSAIR K100 RGB is the pinnacle of CORSAIR keyboards, offering the cutting-edge performance, style, durability, and customization that gamers need to stand above the rest.",
  },
  {
    id: 20,
    name: "HyperX Pulsefire Haste",
    brand: "HyperX",
    category: "mouse",
    image: [pulsefire_haste_1],
    new_price: 89.99,
    old_price: 100,
    description:
      "The HyperX Pulsefire Haste 16000 DPI optical gaming mouse combines style and function in a compact and lightweight package. Practical honeycomb shell not only looks cool, but also improves grip while playing.",
  },
  {
    id: 21,
    name: "Corsair K60 RGB Pro",
    brand: "Corsair",
    category: "keyboard",
    image: [corsair_k60_rgb_1],
    new_price: 95.99,
    old_price: 149.99,
    description:
      "Take command of the battlefield with the Corsair K60 PRO RGB mechanical optical TKL gaming keyboard. With its brushed aluminum frame and compact tenkeyless design, it blends rugged aesthetics with space-saving efficiency.",
  },
  {
    id: 22,
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    category: "mouse",
    image: [g_pro_superlight_2_1],
    new_price: null,
    old_price: 219.99,
    description:
      "Get superior precision and ergonomics for your esport adventures with the Logitech G PRO X Superlight 2 wireless gaming mouse. It tracks your smallest move on almost any surface with its 32,000 DPI HERO 2 sensor while the LIGHTFORCE hybrid optical-mechanical switches actuate at ultralow latencies.",
  },
  {
    id: 23,
    name: "Razer Viper V3 Hyperspeed",
    brand: "Razer",
    category: "mouse",
    image: [viper_v3_1],
    new_price: null,
    old_price: 99.99,
    description:
      "Take your speed and accuracy to next level with this Razer Viper V3 HyperSpeed wireless gaming mouse. Its lightweight design and Focus Pro 30K optical sensor give you extraordinary level of control and smooth tracking.",
  },
  {
    id: 24,
    name: "Corsair Virtuoso RGB Wireless SE",
    brand: "Corsair",
    category: "headset",
    image: [virtuoso_se_1],
    new_price: null,
    old_price: 339.99,
    description:
      "Get an immersive gaming experience with the Corsair Virtuoso RGB Wireless SE gaming headset. The Slipstream Corsair Wireless technology offers ultra-low latency and high-fidelity audio within a 60ft. (18.3m) signal range.",
  },
  {
    id: 25,
    name: "SteelSeries Arctis Nova Pro",
    brand: "SteelSeries",
    category: "headset",
    image: [arctis_nova_pro_1],
    new_price: null,
    old_price: 449.99,
    description:
      "Take a deep dive into your gaming world with the SteelSeries Arctis Nova Pro wireless gaming headset. With high quality audio drivers, this over-ear headset produces crisp and distinct sounds while the AI noise cancelling mic ensures uninterrupted conversations.",
  },
];

export default products;
