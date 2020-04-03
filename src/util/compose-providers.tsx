import React from "react";

export const composeProviders = <Props extends {}>(
  ...Providers: React.ComponentType[]
) => (Child: React.ComponentType<Props>) => (props: Props) =>
  Providers.reduce(
    (acc, Provider) => <Provider>{acc}</Provider>,
    <Child {...props} />
  );
