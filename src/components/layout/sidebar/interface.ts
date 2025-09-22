export interface SidebarElement {
    id: string;
}

export interface SidebarGroup extends SidebarElement {
    subHeader?: string;
    children: SidebarElement[];
}

export interface SidebarItem extends SidebarElement {
    label: string;
    icon: React.ElementType;
    url: string;
}

export function isSidebarGroup(
    element: SidebarElement
): element is SidebarGroup {
    return (element as SidebarGroup).children !== undefined;
}

export function isSidebarItem(element: SidebarElement): element is SidebarItem {
    return (element as SidebarItem).label !== undefined;
}
