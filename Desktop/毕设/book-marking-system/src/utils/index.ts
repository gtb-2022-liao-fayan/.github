//瀑布流宽度转化
export function p2w(n: number, base: number = 375) {
  return `${(n / base) * 100}vw`;
}