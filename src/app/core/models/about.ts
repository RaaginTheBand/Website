export interface History {
  imageUrl: string;
  text1: string;
  text2: string;
}

export interface Members {
  [name: string]: MemberInfo;
}

interface MemberInfo {
  description: string;
  imageUrl: string;
  role: string;
}
