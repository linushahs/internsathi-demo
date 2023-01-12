import { FiChevronDown } from "react-icons/fi";

function NavItem({
  title,
  hasDropdown,
}: {
  title: string;
  hasDropdown: boolean;
}) {
  return (
    <li className="py-2 hover:text-blue hover:border-b-[2.5px] hover:border-b-blue">
      <a href="" className="flex items-center gap-2">
        {title} {hasDropdown ? <FiChevronDown /> : null}
      </a>
    </li>
  );
}

export default NavItem;
