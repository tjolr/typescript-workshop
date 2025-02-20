import { z } from "zod";

const baseTransaksjonSchema = z.object({
  belop: z.number(),
  dato: z.date(),
});

const uttaksTransaksjonSchema = baseTransaksjonSchema.extend({
  type: z.literal("uttak"),
  fraKonto: z.string(),
});

const innskuddsTransaksjonSchema = baseTransaksjonSchema.extend({
  type: z.literal("innskudd"),
  tilKonto: z.string(),
});

const overføringsTransaksjonSchema = baseTransaksjonSchema.extend({
  type: z.literal("overføring"),
  fraKonto: z.string(),
  tilKonto: z.string(),
});

const transaksjonSchema = z.discriminatedUnion("type", [
  uttaksTransaksjonSchema,
  innskuddsTransaksjonSchema,
  overføringsTransaksjonSchema,
]);

type Transaksjon = z.infer<typeof transaksjonSchema>;

const uttaksTransaksjon: Transaksjon = {
  belop: 100,
  dato: new Date(2021, 11, 17),
  type: "uttak",
  fraKonto: "4321",
};

const innskuddsTransaksjon: Transaksjon = {
  belop: 50,
  dato: new Date(2021, 11, 18),
  type: "innskudd",
  tilKonto: "8765",
};

const overføringsTransaksjon: Transaksjon = {
  belop: 50,
  dato: new Date(2021, 11, 18),
  type: "overføring",
  fraKonto: "4321",
  tilKonto: "8765",
};

const utførTransaksjon = (transaksjon: Transaksjon) => {
  const validertTransaksjon = transaksjonSchema.parse(transaksjon);

  switch (validertTransaksjon.type) {
    case "uttak":
      return `Uttak: ${validertTransaksjon.belop} fra konto ${validertTransaksjon.fraKonto}`;
    case "innskudd":
      return `Innskudd: ${validertTransaksjon.belop} til konto ${validertTransaksjon.tilKonto}`;
    case "overføring":
      return `Overføring: ${validertTransaksjon.belop} fra konto ${validertTransaksjon.fraKonto} til konto ${validertTransaksjon.tilKonto}`;
  }
};
