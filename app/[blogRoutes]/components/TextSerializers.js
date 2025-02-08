import { urlFor } from "@/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Children } from "react";

function TextSerializer({ data, className }) {
  const addId = (children) => {
    const str = children;
    const strUnderscores =
      str.length > 0 &&
      str
        .toString()
        .replace(/[\s0-9-()&:?]/g, "_")
        .toLowerCase();
    return strUnderscores;
  };

  const serializers = {
    types: {
      image: ({ value }) => (
        <div className="flex justify-center my-4">
          <Image
            src={urlFor(value).url()}
            height={500}
            width={900}
            className="block"
            alt="serializers"
          />
        </div>
      ),
      code: ({ value }) => (
        <div
          className="overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: value.code }}
        />
      ),
    },
    block: {
      p: ({ children }) => (
        <p className="text-gray-800 leading-relaxed">{children}</p>
      ),
      h1: ({ children }) => (
        <h1
          className="text-black text-4xl font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2
          className="text-black text-3xl font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3
          className="text-black text-2xl font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4
          className="text-black text-xl font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5
          className="text-black text-lg font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6
          className="text-black text-base font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h6>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 pl-4">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc">{children}</ul>,
      number: ({ children }) => <ol className="list-disc">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="pb-2 list-disc">{children}</li>,
    },
  };

  return <PortableText value={data} components={serializers} />;
}

export default TextSerializer;

// import { urlFor } from "@/lib/client";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import PropTypes from "prop-types";

// // Correct dynamic import for PortableText
// const PortableText = dynamic(
//   () => import("@portabletext/react").then((mod) => mod.PortableText),
//   { ssr: false }
// );

// function TextSerializer({ data, className }) {
//   // Helper function to generate sanitized IDs for headers
//   const addId = (children) => {
//     const str = Array.isArray(children) ? children.join("") : children; // Handle arrays
//     return str
//       .toString()
//       .trim()
//       .replace(/[\s0-9-()&:?]/g, "_")
//       .replace(/_+/g, "_") // Replace multiple underscores with a single one
//       .replace(/^_|_$/g, "") // Remove leading or trailing underscores
//       .toLowerCase();
//   };

//   const serializers = {
//     types: {
//       image: ({ value }) => (
//         <div className="flex justify-center my-10">
//           <Image
//             src={urlFor(value).url()}
//             height={500}
//             width={800}
//             className="block"
//             alt={value.alt || "Image"} // Dynamically use alt text if available
//           />
//         </div>
//       ),
//       code: ({ value }) => (
//         <div
//           className="overflow-x-auto  p-4 rounded-md"
//           dangerouslySetInnerHTML={{ __html: value.code || "" }} // Defensive check for value.code
//         />
//       ),
//     },
//     block: {
//       p: ({ children }) => (
//         <p className="text-gray-800 leading-relaxed">{children}</p>
//       ),
//       h1: ({ children }) => (
//         <h1 className="text-black text-4xl font-bold my-8" id={addId(children)}>
//           {children}
//         </h1>
//       ),
//       h2: ({ children }) => (
//         <h2
//           className="text-black text-3xl font-bold mt-5 mb-2"
//           id={addId(children)}
//         >
//           {children}
//         </h2>
//       ),
//       h3: ({ children }) => (
//         <h3
//           className="text-black text-2xl font-bold mt-5 mb-2"
//           id={addId(children)}
//         >
//           {children}
//         </h3>
//       ),
//       h4: ({ children }) => (
//         <h4
//           className="text-black text-xl font-bold mt-5 mb-2"
//           id={addId(children)}
//         >
//           {children}
//         </h4>
//       ),
//       h5: ({ children }) => (
//         <h5
//           className="text-black text-lg font-bold mt-5 mb-2"
//           id={addId(children)}
//         >
//           {children}
//         </h5>
//       ),
//       h6: ({ children }) => (
//         <h6
//           className="text-black text-base font-bold mt-5 mb-2"
//           id={addId(children)}
//         >
//           {children}
//         </h6>
//       ),
//       blockquote: ({ children }) => (
//         <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
//           {children}
//         </blockquote>
//       ),
//     },
//     list: {
//       bullet: ({ children }) => (
//         <ul className="list-disc ml-6 space-y-2">{children}</ul>
//       ),
//       number: ({ children }) => (
//         <ol className="list-decimal ml-6 space-y-2">{children}</ol>
//       ),
//     },
//     listItem: {
//       bullet: ({ children }) => <li className="pb-2">{children}</li>,
//     },
//     mark: {
//       link: ({ value, children }) => {
//         const { href } = value;
//         return (
//           <a
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-red-800 underline"
//             aria-label={`Link to ${href}`}
//           >
//             {children}
//           </a>
//         );
//       },
//     },
//   };

//   return <PortableText value={data} components={serializers} />;
// }

// // PropTypes for validation
// TextSerializer.propTypes = {
//   data: PropTypes.array.isRequired,
//   className: PropTypes.string,
// };

// // Default props
// TextSerializer.defaultProps = {
//   className: "",
// };

// export default TextSerializer;
