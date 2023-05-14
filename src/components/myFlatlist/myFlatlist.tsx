import React from "react";

export type IMyFlatListProps<DataType> = {
  data: DataType[];
  renderer: (i: DataType) => React.ReactNode;
};

function MyFlatListRoot<T>({ data, renderer }: IMyFlatListProps<T>) {
  return (
    <ul className="my-flat-list__container">
      {data.map((i) => (
        <li className="my-flat-list__li">{renderer(i)}</li>
      ))}
    </ul>
  );
}

export const MyFlatList = React.memo(MyFlatListRoot) as typeof MyFlatListRoot;
