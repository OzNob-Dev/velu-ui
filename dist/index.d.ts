import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, HTMLAttributes, InputHTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

interface NavModule {
    label: string;
    href: string;
    color: string;
    dot?: string;
}
interface TopNavProps {
    modules?: NavModule[];
    userName: string;
    userRole?: string;
    userInitials?: string;
    userAvatarSrc?: string | null;
    userAvatarColor?: string;
    onLogout?: () => void | Promise<void>;
    logoHref?: string;
}
declare function TopNav({ modules, userName, userRole, userAvatarSrc, userAvatarColor, onLogout, logoHref, }: TopNavProps): react_jsx_runtime.JSX.Element;

interface SubNavItem {
    label: string;
    href: string;
    icon: string;
    badge?: number | string;
}
interface SubNavProps {
    items: SubNavItem[];
    accentColor?: string;
}
declare function SubNav({ items, accentColor }: SubNavProps): react_jsx_runtime.JSX.Element;

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    className?: string;
}
declare function PageHeader({ title, subtitle, children, className }: PageHeaderProps): react_jsx_runtime.JSX.Element;

interface VeluLogoProps {
    size?: number;
}
declare function VeluLogo({ size }: VeluLogoProps): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "coral" | "teal" | "primary" | "outline" | "ghost" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
    loading?: boolean;
}
declare function Button({ variant, size, className, children, loading, disabled, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "coral" | "teal" | "active" | "pending" | "inactive" | "open" | "closed" | "draft" | "dark" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    dot?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    dot?: boolean;
}
declare function Badge({ variant, size, dot, className, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
}
declare function Card({ padding, hover, className, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;
/** Pre-styled stat card with icon + value + label */
interface StatCardProps {
    label: string;
    value: string | number;
    delta?: string;
    icon?: React.ReactNode;
    iconColor?: string;
    className?: string;
}
declare function StatCard({ label, value, delta, icon, iconColor, className }: StatCardProps): react_jsx_runtime.JSX.Element;

interface AvatarProps {
    name: string;
    src?: string | null;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: string;
    className?: string;
}
declare function Avatar({ name, src, size, color, className }: AvatarProps): react_jsx_runtime.JSX.Element;

interface ProgressBarProps {
    value: number;
    max?: number;
    color?: string;
    size?: 'sm' | 'md';
    showLabel?: boolean;
    className?: string;
}
declare function ProgressBar({ value, max, color, size, showLabel, className }: ProgressBarProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    icon?: string;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}
declare function EmptyState({ icon, title, description, action, className }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface Column<T> {
    key: string;
    header: string;
    render?: (row: T) => ReactNode;
    width?: string;
}
interface DataTableProps<T extends {
    id: string;
}> {
    columns: Column<T>[];
    data: T[];
    empty?: ReactNode;
    className?: string;
}
declare function DataTable<T extends {
    id: string;
}>({ columns, data, empty, className }: DataTableProps<T>): react_jsx_runtime.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
}
declare function Input({ label, error, hint, className, id, ...props }: InputProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;
declare function getInitials(name: string): string;
declare function formatDate(date: string | Date): string;
declare function formatDateShort(date: string | Date): string;

interface BaseProps {
    className?: string;
    children?: ReactNode;
}
type Size = 'sm' | 'md' | 'lg';
type Variant = 'default' | 'primary' | 'ghost' | 'danger';
type Status = 'active' | 'inactive' | 'pending' | 'on_leave' | 'open' | 'closed' | 'draft';
type Module = 'hr' | 'manager' | 'recruiter' | 'candidate' | 'admin';

export { Avatar, Badge, type BaseProps, Button, Card, type Column, DataTable, EmptyState, Input, type Module, type NavModule, PageHeader, ProgressBar, type Size, StatCard, type Status, SubNav, type SubNavItem, TopNav, type TopNavProps, type Variant, VeluLogo, cn, formatDate, formatDateShort, getInitials };
