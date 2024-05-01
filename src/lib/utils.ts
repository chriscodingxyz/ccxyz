import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function timeout(time: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
}
