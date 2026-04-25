<template>
  <main class="demo-page">
    <h3>Impact.com Take-Home Demo</h3>
    <p>
      <NuxtLink to="/"> Home </NuxtLink>
    </p>

    <section class="product-card">
      <h2 id="product-name">Super Widget</h2>
      <p>
        Price:
        <span id="product-price">19.99</span>
      </p>

      <button @click="sendProductToHttpBin">Send Product API Test</button>
    </section>
    <!-- 
    <section class="direct-links">
      <h2>Direct Links</h2>
      <ul>
        <li>
          <a
            href="https://httpbin.org/post"
            target="_blank"
            rel="noopener noreferrer"
          >
            httpbin POST Endpoint
          </a>
        </li>
      </ul>
    </section> -->
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
declare global {
  interface Window {
    // dataLayer?: any[]
    dataLayer?: Array<Record<string, any>>;
  }
}

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

  const productEvent = [...(window.dataLayer || [])]
    .reverse()
    .find((item: any) => item.event === "product_detail_view" && item.product);

  return productEvent?.product || null;
};

const sendProductToHttpBin = async () => {
  const product = getLatestProductFromDataLayer();

  if (!product) {
    console.warn("No product data found in dataLayer.");
    return;
  }

  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const responsePayload = await response.json();

  console.log("httpbin response payload:", responsePayload);
};

onMounted(() => {
  pushProductToDataLayer();
});
</script>

<style scoped>
.demo-page {
  max-width: 720px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;
}

.direct-links {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
  background: #fafafa;
}

.direct-links ul {
  margin: 0;
  padding-left: 20px;
}

.direct-links li {
  margin: 8px 0;
}

.direct-links a {
  color: #005fcc;
  text-decoration: none;
}

.direct-links a:hover {
  text-decoration: underline;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
}
</style>
