![Screenshot](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri001.png)

## React Integration Demo

This sample shows how to host React components in [DotVVM](https://github.com/riganti/dotvvm) pages. 

### Prerequisites

* .NET 6
* [node.js and npm](https://nodejs.org/en/download/)
* Optionally, [yarn package manager](https://yarnpkg.com/) (as alternative to npm)
* Optionally, [DotVVM for Visual Studio](https://www.dotvvm.com/install)

### How to run the sample

1. [Open the GitHub repo in Visual Studio](git-client://clone/?repo=https%3A%2F%2Fgithub.com%2Friganti%2Fdotvvm-samples-react-integration)
or 
`git clone https://github.com/riganti/dotvvm-samples-react-integration.git`

2. Open `ReactIntegrationDemo.sln` 
![Open the solution file](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri002.png)

### Sample 1: Recharts chart component & simple UpDown component 

1. In your favorite shell, navigate in the solution directory and run the following commands:

```
cd Recharts_UpDown
yarn install --immutable
yarn build
```

2. Execute `dotnet run` or right-click the `Recharts_UpDown` project and select **View > View in Browser**
![View Recharts_UpDown in Browser](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri003.png)

3. You can interact with the React components in the page and see how they are able to synchronize with the other controls in the page.

![Recharts & UpDown components demo](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri004.png)

### Sample 2: Digraph diagram component integration 

1. In your favorite shell, navigate in the solution directory and run the following commands. Make sure `yarn` is installed

```
cd Digraph
dotnet run
```

2. Execute `dotnet run` or right-click the `Digraph` project and select **View > View in Browser**
![View Digraph in Browser](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri005.png)

3. You can interact with the React components in the page and see how they are able to synchronize with the other controls in the page.

![Recharts & UpDown components demo](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri006.png)

> In order to rebuild JavaScript files faster, `yarn dev` command can be used to start rollup in watch mode.

### Sample 3: Telerik KendoReact integration

1. Obtain a license of [Telerik KendoReact](https://www.telerik.com/kendo-react-ui) and place the license text file to the following path: `Kendo/kendo-ui-license.txt`

2. In your favorite shell, navigate in the solution directory and run the following commands. 

```
cd Kendo
npm ci
npm run build
```

3. Execute `dotnet run` or right-click the `Kendo` project and select **View > View in Browser**
![View Kendo in Browser](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri007.png)

4. You can interact with the React components in the page and see how they are able to synchronize with the other controls in the page.

![Kendo components demo](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri008.png)


### Sample 4: DevExtreme React integration

1. Obtain a license of [DevExtreme React](https://js.devexpress.com/React/).

2. In your favorite shell, navigate in the solution directory and run the following commands. 

```
cd DevExtreme
npm ci
npm run build
```

3. Execute `dotnet run` or right-click the `DevExtreme` project and select **View > View in Browser**
![View DevExtreme in Browser](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri009.png)

4. You can interact with the React components in the page and see how they are able to synchronize with the other controls in the page.

![DevExtreme components demo](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri010.png)



### Sample 5: Syncfusion React UI integration

1. Obtain a license of [Syncfusion React UI](https://www.syncfusion.com/react-components).

2. In your favorite shell, navigate in the solution directory and run the following commands. 

```
cd Syncfusion
npm ci
npm run build
```

3. Execute `dotnet run` or right-click the `Syncfusion` project and select **View > View in Browser**
![View Syncfusion in Browser](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri011.png)

4. You can interact with the React components in the page and see how they are able to synchronize with the other controls in the page.

![Syncfusion components demo](https://raw.githubusercontent.com/riganti/dotvvm-samples-react-integration/master/images/ri012.png)


### What you can learn in the sample

* Wrapping React components to be used in DotVVM using the `<js:Component />` control.
* Set up rollup or esbuild pipeline to bundle all resources together

---

## Other resources

* [DotVVM Forum](https://forum.dotvvm.com)
* [DotVVM Official Website](https://www.dotvvm.com)
* [DotVVM Documentation](https://www.dotvvm.com/docs)
* [DotVVM GitHub](https://github.com/riganti/dotvvm)
* [Twitter @dotvvm](https://twitter.com/dotvvm)
* [Samples](https://www.dotvvm.com/samples)
