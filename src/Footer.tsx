import { useColorMode } from "@chakra-ui/react";
import { Link, Text } from "@chakra-ui/react";
function Footer() {
  const { colorMode } = useColorMode();

  return (
    <footer
      className={
        colorMode === "dark"
          ? "rounded-lg shadow m-4 bg-gray-800"
          : "bg-white rounded-lg shadow m-4"
      }
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <Text>
          Coded in <Link href='https://code.visualstudio.com/' isExternal color='teal.400' fontWeight={500}>Visual Studio Code</Link> by yours truly. 
          Built with <Link href='https://vitejs.dev/' isExternal color='teal.400' fontWeight={500}>React + Vite</Link>,&nbsp;
           <Link href='https://flowbite.com/' isExternal color='teal.400' fontWeight={500}>Flowbite + TailwindCSS</Link>&nbsp;
           and <Link href='https://v2.chakra-ui.com/' isExternal color='teal.400' fontWeight={500}>Chakra UI </Link> for theme, deployed
          with <Link href='https://docs.github.com/en/actions/deployment/about-deployments/deploying-with-github-actions' isExternal color='teal.400' fontWeight={500}>GitHub</Link>.
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
