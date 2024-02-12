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
import arctis1_1 from "./steelseries-arctis-1.png";

let products = [
  {
    id: 1,
    name: "Logitech G Pro X Superlight",
    brand: "Logitech",
    category: "mouse",
    image: [g_pro_superlight_1],
    new_price: null,
    old_price: 219.99,
  },
  {
    id: 2,
    name: "Razer Deathadder V3 Pro",
    brand: "Razer",
    category: "mouse",
    image: [deathadder_v3_pro_1],
    new_price: null,
    old_price: 189.99,
  },
  {
    id: 3,
    name: "Razer Viper V2 Pro",
    brand: "Razer",
    category: "mouse",
    image: [viper_v2_pro_1],
    new_price: null,
    old_price: 189.99,
  },
  {
    id: 4,
    name: "HyperX Cloud III Wireless",
    brand: "HyperX",
    category: "headset",
    image: [cloud3_wireless_1],
    new_price: 194.99,
    old_price: 213.99,
  },
  {
    id: 5,
    name: "Logitech G Pro X Lightspeed",
    brand: "Logitech",
    category: "headset",
    image: [g_pro_wireless_1],
    new_price: null,
    old_price: 249.99,
  },
  {
    id: 6,
    name: "Corsair HS55 Wireless",
    brand: "Corsair",
    category: "headset",
    image: [corsair_hs55_1],
    new_price: 99.99,
    old_price: 134.99,
  },
  {
    id: 7,
    name: "Razer Barracuda X Plus",
    brand: "Razer",
    category: "headset",
    image: [barracuda_x_plus_1],
    new_price: null,
    old_price: 124.99,
  },
  {
    id: 8,
    name: "Astro Gaming A50",
    brand: "Astro",
    category: "headset",
    image: [astro_a50_1],
    new_price: null,
    old_price: 399.99,
  },
  {
    id: 9,
    name: "Razer Huntsman Mini",
    brand: "Razer",
    category: "keyboard",
    image: [huntsman_mini_1],
    new_price: 159.99,
    old_price: 174.99,
  },
  {
    id: 10,
    name: "Corsair K70 Mini",
    brand: "Corsair",
    category: "keyboard",
    image: [corsair_k70_1],
    new_price: 199.99,
    old_price: 260,
  },
  {
    id: 11,
    name: "Razer Blackshark V2 Pro",
    brand: "Razer",
    category: "headset",
    image: [blackshark_1],
    new_price: 179.99,
    old_price: 274.99,
  },
  {
    id: 12,
    name: "Logitech G305 Wireless",
    brand: "Logitech",
    category: "mouse",
    image: [logitech_g305_wireless_1],
    new_price: null,
    old_price: 59.99,
  },
  {
    id: 13,
    name: "logitech G432",
    brand: "Logitech",
    category: "headset",
    image: [logitech_g432_1],
    new_price: 69.99,
    old_price: 99.99,
  },
  {
    id: 14,
    name: "Redragon K530 Pro Draconic",
    brand: "Redragon",
    category: "keyboard",
    image: [k530_pro_draconic_1],
    new_price: 79.99,
    old_price: 84.99,
  },
  {
    id: 15,
    name: "Logitech G502 Lightspeed",
    brand: "Logitech",
    category: "mouse",
    image: [logitech_g502_wireless_1],
    new_price: 169.99,
    old_price: 199.99,
  },
  {
    id: 16,
    name: "Ducky One 3",
    brand: "Ducky",
    category: "keyboard",
    image: [ducky_3_1],
    new_price: null,
    old_price: 184.99,
  },
  {
    id: 17,
    name: "Steelseries Arctis 1",
    brand: "Steelseries",
    category: "headset",
    image: [arctis1_1],
    new_price: 79.99,
    old_price: 119.99,
  },
  {
    id: 18,
    name: "Logitech G915 TKL Lightspeed",
    brand: "Logitech",
    category: "keyboard",
    image: [logitech_g915_tkl_wireless_1],
    new_price: null,
    old_price: 319.99,
  },
  {
    id: 19,
    name: "Corsair K100 RGB Optical-Mechanical Gaming Keyboard",
    brand: "Corsair",
    category: "keyboard",
    image: [corsair_k100_1],
    new_price: null,
    old_price: 349.99,
  },
  {
    id: 20,
    name: "HyperX Pulsefire Haste",
    brand: "HyperX",
    category: "mouse",
    image: [pulsefire_haste_1],
    new_price: 89.99,
    old_price: 100,
  },
  {
    id: 21,
    name: "Corsair K60 RGB Pro",
    brand: "Corsair",
    category: "keyboard",
    image: [corsair_k60_rgb_1],
    new_price: 95.99,
    old_price: 149.99,
  },
];
