import viper_v2_pro_1 from "./razer-viper-v2-pro.png";
import deathadder_v3_pro_1 from "./razer-deathadder-v3-pro.png";
import g_pro_superlight_1 from "./logitech-g-pro-x-superlight.png";
import cloud3_wireless_1 from "./hyperx-cloud-3-wireless.png";

let popular_products = [
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
];

export default popular_products;
