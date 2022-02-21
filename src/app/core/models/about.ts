export interface History {
  imageUrl: string;
  text: string;
  title: string;
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
