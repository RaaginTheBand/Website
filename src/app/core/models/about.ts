export interface History {
  imageUrl: string;
  text1: string;
  text2: string;
}

export interface Members {
  lineup: MemberInfo[];
  title: string;
}

interface MemberInfo {
  description: string;
  imageUrl: string;
  name: string;
  role: string;
}
