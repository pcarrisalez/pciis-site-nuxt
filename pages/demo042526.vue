<template>
  <main class="demo-page">
    <header class="hero">
      <p class="eyebrow">Impact.com Take-Home Demo</p>

      <h1>Product Tracking Demo</h1>

      <p class="hero-copy">
        A small Nuxt demo showing how product details can be captured, pushed to
        the data layer, and sent to a test API endpoint.
      </p>

      <NuxtLink class="home-link" to="/">← Back home</NuxtLink>
    </header>

    <section class="product-card" aria-labelledby="product-name">
      <div class="product-image-wrap">
        <img
          class="product-image"
          :src="superwidgetImage"
          alt="Super Widget represented by a paperclip"
        />
      </div>

      <div class="product-content">
        <p class="product-label">Featured Product</p>

        <h2 id="product-name">Super Widget</h2>

        <p class="product-description">
          The humble paperclip, reimagined as an enterprise-ready productivity
          accelerator. Lightweight, flexible, and surprisingly attachable.
        </p>

        <p class="price-row">
          Price:
          <span id="product-price" class="price">19.99</span>
        </p>

        <button class="primary-button" @click="sendProductToHttpBin">
          Send Product API Test
        </button>

        <p v-if="statusMessage" class="status-message">
          {{ statusMessage }}
        </p>
      </div>
    </section>

    <section class="details-panel">
      <h2>What this demo shows</h2>

      <ul>
        <li>Reads product information from the page</li>
        <li>Pushes a structured event into <code>window.dataLayer</code></li>
        <li>Retrieves the latest product event</li>
        <li>
          Sends the product payload to <code>https://httpbin.org/post</code>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import superwidgetImage from "~/assets/images/superwidget.jpg";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const statusMessage = ref("");

const pushProductToDataLayer = () => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const productName =
    document.getElementById("product-name")?.textContent?.trim() || "";

  const productPriceText =
    document.getElementById("product-price")?.textContent?.trim() || "0";

  const productPrice = Number(productPriceText);

  const productData = {
    event: "product_detail_view",
    product: {
      name: productName,
      price: productPrice,
    },
  };

  window.dataLayer.push(productData);

  console.log("Product data pushed to window.dataLayer:", window.dataLayer);
};

const getLatestProductFromDataLayer = () => {
  if (typeof window === "undefined") return null;

  const productEvent = [...(window.dataLayer || [])].reverse().find((item) => {
    return item.event === "product_detail_view" && item.product;
  });

  return productEvent?.product || null;
};

const sendProductToHttpBin = async () => {
  const product = getLatestProductFromDataLayer();

  if (!product) {
    statusMessage.value = "No product data found in the data layer.";
    console.warn("No product data found in dataLayer.");
    return;
  }

  statusMessage.value = "Sending product data...";

  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const responsePayload = await response.json();

    console.log("httpbin response payload:", responsePayload);

    statusMessage.value = "Product data sent successfully. Check the console.";
  } catch (error) {
    console.error("Unable to send product data:", error);
    statusMessage.value = "Unable to send product data. Check the console.";
  }
};

onMounted(() => {
  pushProductToDataLayer();
});
</script>

<style scoped>
.demo-page {
  min-height: 100vh;
  max-width: 960px;
  margin: 0 auto;
  padding: 56px 20px;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  color: #172033;
}

.hero {
  margin-bottom: 32px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #5b6b84;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.hero-copy {
  max-width: 640px;
  margin: 18px 0 20px;
  color: #526075;
  font-size: 1.1rem;
  line-height: 1.7;
}

.home-link {
  display: inline-flex;
  color: #0f62fe;
  font-weight: 700;
  text-decoration: none;
}

.home-link:hover {
  text-decoration: underline;
}

.product-card {
  display: grid;
  grid-template-columns: minmax(220px, 320px) 1fr;
  gap: 32px;
  align-items: center;
  border: 1px solid #dde3ee;
  border-radius: 24px;
  padding: 28px;
  background:
    radial-gradient(
      circle at top left,
      rgba(15, 98, 254, 0.12),
      transparent 34%
    ),
    #ffffff;
  box-shadow: 0 24px 70px rgba(23, 32, 51, 0.12);
}

.product-image-wrap {
  display: grid;
  place-items: center;
  min-height: 280px;
  border-radius: 20px;
  background: linear-gradient(145deg, #f6f8fc, #ffffff);
  border: 1px solid #e5ebf5;
}

.product-image {
  width: min(220px, 80%);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 18px 24px rgba(23, 32, 51, 0.18));
}

.product-label {
  margin: 0 0 8px;
  color: #0f62fe;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.product-content h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.product-description {
  margin: 18px 0;
  color: #526075;
  font-size: 1rem;
  line-height: 1.7;
}

.price-row {
  margin: 0 0 24px;
  color: #354154;
  font-size: 1rem;
}

.price {
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  color: #172033;
  font-size: 1.75rem;
  font-weight: 800;
}

.price::before {
  content: "$";
  font-size: 1rem;
  margin-right: 1px;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  padding: 13px 20px;
  background: #172033;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(23, 32, 51, 0.22);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    background 160ms ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  background: #0f62fe;
  box-shadow: 0 16px 32px rgba(15, 98, 254, 0.28);
}

.primary-button:active {
  transform: translateY(0);
}

.status-message {
  margin: 16px 0 0;
  color: #526075;
  font-size: 0.95rem;
}

.details-panel {
  margin-top: 28px;
  border: 1px solid #dde3ee;
  border-radius: 20px;
  padding: 24px;
  background: #f8fafd;
}

.details-panel h2 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.details-panel ul {
  margin: 0;
  padding-left: 20px;
  color: #526075;
  line-height: 1.8;
}

.details-panel code {
  border-radius: 6px;
  padding: 2px 6px;
  background: #eef3fb;
  color: #172033;
}

@media (max-width: 720px) {
  .demo-page {
    padding-top: 32px;
  }

  .product-card {
    grid-template-columns: 1fr;
    padding: 22px;
  }

  .product-image-wrap {
    min-height: 220px;
  }
}
</style>
