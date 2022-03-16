
export interface StyleDisplayShape {
  id: string;
  pic: string;
  title: string;
  tag:string,
  tagImg:string,
  // 1-已点赞 2-未点赞
  fag: 1 | 2;
  praiseNum: number;
  updateTime: string;
}