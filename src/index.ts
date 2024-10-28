import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const data = {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "ご案内",
          weight: "bold",
          size: "lg",
        },
        {
          type: "text",
          text: "該当する項目を選んでください！",
          size: "md",
          color: "#666666",
          margin: "md",
        },
        {
          type: "button",
          action: {
            type: "uri",
            label: "開催日時・テーマ",
            uri: "https://example.com",
          },
          style: "link",
        },
        {
          type: "button",
          action: {
            type: "uri",
            label: "理大祭HP",
            uri: "https://example.com",
          },
          style: "link",
        },
        {
          type: "button",
          action: {
            type: "uri",
            label: "公式SNS",
            uri: "https://example.com",
          },
          style: "link",
        },
        {
          type: "button",
          action: {
            type: "uri",
            label: "アクセス",
            uri: "https://example.com",
          },
          style: "link",
        },
        {
          type: "button",
          action: {
            type: "uri",
            label: "その他の内容",
            uri: "https://example2.com",
          },
          style: "link",
        },
      ],
    },
  };
  return c.json(data);
});

export default app;
