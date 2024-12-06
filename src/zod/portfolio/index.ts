import { z } from "zod";

export const createPortfolioItemSchema = z.object({
  heading: z.string().min(1, { message: "Содержание не может быть пустым" }),
  livelink: z.string().optional(),
  features: z.string().optional(),
  technologies: z.string().optional(),
  roles: z.string().optional(),
  fileNamesArr: z.string().min(1, { message: "Пожалуйста добавьте картинку" }),
  order: z.number().optional(), // Makes 'order' optional
});

export const editPortfolioItemSchema = z.object({
  heading: z.string().min(1, { message: "Содержание не может быть пустым" }),
  livelink: z.string().optional(),
  features: z.string().optional(),
  technologies: z.string().optional(),
  roles: z.string().optional(),
  id: z.string().cuid({ message: "Неверный id " }),
  fileNamesArr: z.string().min(1, { message: "Пожалуйста добавьте картинку" }),
  order: z.number().optional(), // Makes 'order' optional
});
