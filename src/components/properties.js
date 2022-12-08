import script from "./script";

const properties = {
  isComponent: (el) => el.id === process.env.MODULE_ID,
  model: {
    defaults: {
      script,
      traits: [
        {
          changeProp: 1,
          type: "text",
          name: "contract",
        },
      ],
      "script-props": ["contract"],
    },
  },
};

export default properties;
