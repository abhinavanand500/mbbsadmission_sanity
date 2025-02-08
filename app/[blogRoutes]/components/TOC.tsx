"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import goto from "../../../public/goto.webp";
import Image from "next/image"; // Use next/image for optimized images
import styles from "./toc.module.css";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const router = useRouter();
  //   console.log("ssssss", router);
  //   const { asPath } = router;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if we are in the browser
      const elements = Array.from(
        document.querySelectorAll("h2, h3, h4, h5, h6")
      ).map((elem) => ({
        id: elem.id,
        text: elem.textContent || "",
        level: Number(elem.nodeName.charAt(1)),
      }));
      setHeadings(elements);
    }
  }, []);

  return (
    <nav>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <li key={heading.id} className="flex">
            <Image src={goto} alt="company_icon" width={16} height={16} />
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector(`#${heading.id}`);
                if (targetElement) {
                  const offset = 120; // Adjust this value as needed to scroll slightly down
                  const targetPosition =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset;
                  window.scrollTo({
                    top: targetPosition - offset,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TOC;
