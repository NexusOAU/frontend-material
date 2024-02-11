const ItemDetailsRoute = ({ params }: { params: { id: string } }) => {
  return <h2>This is item: {params.id}</h2>;
};

export default ItemDetailsRoute;
