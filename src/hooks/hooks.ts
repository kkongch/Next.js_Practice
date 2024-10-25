import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Reducer } from "@/store";
import { useEffect } from "react";
export const useAppSelector: TypedUseSelectorHook<Reducer> = useSelector;

interface ObserverProps {
  target: React.RefObject<HTMLElement>;
  onIntersect: IntersectionObserverCallback;
  root?: null; // ��차할 부모 요소, null일 경우 document
  rootMargin?: string; // root와 target이 ��지하는 여��의 ��리
  threshold?: number; // intersectionRatio가 threshold 이상일 때 callback이 실행된다.
}

export const useObserver = ({
  target, // 감지할 대상, ref를 넘길 예정
  onIntersect, // 감지 시 실행할 callback 함수
  root = null, // 교차할 부모 요소, 아무것도 넘기지 않으면 document가 기본이다.
  rootMargin = "0px", // root와 target이 감지하는 여백의 거리
  threshold = 1, // 임계점. 1.0이면 root내에서 target이 100% 보여질 때 callback이 실행된다.
}: ObserverProps) => {
  useEffect(() => {
    if (!target.current) return; // target.current가 null이면 observer 설정 안 함

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target.current); // 감지 시작

    // cleanup 함수: target이 변경되거나 컴포넌트가 unmount될 때 observer를 해제
    return () => {
      if (target.current) observer.unobserve(target.current); // target이 존재하면 해제
    };
  }, [target.current, onIntersect, root, rootMargin, threshold]); // target.current가 변경될 때마다 재실행
};
