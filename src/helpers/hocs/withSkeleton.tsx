import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(Component: any, type: string, count: number) {
  return function WithSkeleton(props: any) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...restProps} />;
  };
}
export default withSkeleton;
