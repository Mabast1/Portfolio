# Portfolio

1. Setting up sanity:

1.a. Install Sanity:
npm install -g @sanity/cli

1.b. Initiallize Sanity
sanity init --coupon javascriptmastery2022

1.c. Create Schemas in the schema folder
example:
-- create testimonials schema by defining the below:
--- first export default { within here you write the below properties}
----name, title, type: 'document', fields: [its an array of objects {objects have name, title, type: string, image..etc}]

2. create the react frontend
   npx create-react-app frontend_react

3. delete the src folder and add your own

3.1 add App.js
-here you will declare the rafce to create react arrow function

3.2 add index.js
here you will import the below:

- React
- ReactDOM
- App from ./App
- './index.css/

then create an object to render the app object in the root index.html
ReactDOM.render(<App/>, document.getElementById('root'));

- 3.3 add index.css
  will hold all global styles

4. install all the dependances within the react folder
   npm install @sanity/client @sanity/image-url framer-motion node-sass react-icons

5. Our CSS uses BEM methodology to organize our css names

6. connecting Sanity to React

- need to create a client file with the below info:
  import sanityClient from "@sanity/client";
  import imageUrlBuilder from "@sanity/image-url";

  export const client = sanityClient({
  projectId: '',
  dataset: "",
  apiVersion: "",
  useCdn: true,
  token: '',
  });

  const builder = imageUrlBuilder(client);

  export const urlFor = (source) => builder.image(source);

7.  using sanity in components: within the component function need to add the below to query over the data type u need for the specified component
    const [anyname, setAnyName] = useState([]);
    useEffect(() => {
    const query = '\*[_type == "anyname"]';

        client.fetch(query).then((data) => setAnyName(data));

    }, []);

8.  we map over the items within the sanity db:
<div>{anyname.map((name, index) => (<div>{name.title}</div>))}</div>
