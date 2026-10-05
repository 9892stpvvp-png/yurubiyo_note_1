import {z} from 'zod';
const text = (max: number) => z.string().trim().min(1).max(max);
export const productSchema = z.object({
  productName: text(48),
  productImage: z.string().trim().min(1),
  intro: text(60),
  points: z.tuple([text(52), text(52), text(52)]),
  cta: text(60),
});
export type ProductProps = z.infer<typeof productSchema>;
