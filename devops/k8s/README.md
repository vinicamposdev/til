To create a cluster with kind ([kind installation guide](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)) use:

```sh
 kind create cluster --config=kind.yaml --name=kind-sample
```

To get informations about cluster, use:
```sh
kubectl cluster-info --context kind-kind-sample
```

To know nodes status:
```sh
 kubectl get nodes
```
