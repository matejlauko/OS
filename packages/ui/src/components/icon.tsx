import * as AccessibleIconPrimitive from '@radix-ui/react-accessible-icon'
import * as React from 'react'
import { styled } from '../create'
import {
  ChevronLeftIcon as ChevronLeftIconPrimitive,
  BellIcon as BellIconPrimitive,
  CheckIcon as CheckIconPrimitive,
  Cross1Icon as Cross1IconPrimitive,
  ExitIcon as ExitIconPrimitive,
  EnterIcon as EnterIconPrimitive,
  TrashIcon as TrashIconPrimitive,
  ArrowRightIcon as ArrowRightIconPrimitive,
  ArrowLeftIcon as ArrowLeftIconPrimitive,
  UpdateIcon as UpdateIconPrimitive,
  Cross2Icon as Cross2IconPrimitive,
  PlusIcon as PlusIconPrimitive,
  MinusIcon as MinusIconPrimitive,
  PersonIcon as PersonIconPrimitive,
  CursorArrowIcon as CursorArrowIconPrimitive,
  Pencil1Icon as Pencil1IconPrimitive,
  Link2Icon as Link2IconPrimitive,
  QuoteIcon as QuoteIconPrimitive,
  DotsVerticalIcon as DotsVerticalIconPrimitive,
  HamburgerMenuIcon as HamburgerMenuIconPrimitive,
  MagnifyingGlassIcon as MagnifyingGlassIconPrimitive,
  ExternalLinkIcon as ExternalLinkIconPrimitive,
  TwitterLogoIcon as TwitterLogoIconPrimitive,
  GearIcon as GearIconPrimitive,
  ChevronDownIcon as ChevronDownIconPrimitive,
  ChevronUpIcon as ChevronUpIconPrimitive,
  ResetIcon as ResetIconPrimitive,
  UploadIcon as UploadIconPrimitive,
  ClipboardCopyIcon as ClipboardCopyIconPrimitive,
  GitHubLogoIcon as GitHubLogoIconPrimitive,
  SlashIcon as SlashIconPrimitive,
  CrossCircledIcon as CrossCircledIconPrimitive,
  LinkedInLogoIcon as LinkedInLogoIconPrimitive,
  MixIcon as MixIconPrimitive,
  TextIcon as TextIconPrimitive,
  EnvelopeClosedIcon as EnvelopeClosedIconPrimitive,
} from '@radix-ui/react-icons'

export const iconVariants = {
  size: {
    sm: {
      size: '$icon$sm_size',
    },
    md: {
      size: '$icon$md_size',
    },
    lg: {
      size: '$icon$lg_size',
    },
    xl: {
      size: '$icon$xl_size',
    },
    text: {
      size: '1em',
    },
  },
  color: {
    default: {
      color: '$icon',
    },
    blend: {
      color: 'inherit',
    },
    accent: {
      color: '$accentSolid',
    },
  },
}

export const UIIcon = styled('svg', {
  transition: 'color $appear_fast',

  variants: iconVariants,
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

type IconProps = Partial<AccessibleIconPrimitive.AccessibleIconProps> &
  React.ComponentProps<typeof UIIcon>

export function createIcon(iconComp: typeof ChevronLeftIconPrimitive) {
  const Icon = React.forwardRef<React.ElementRef<typeof UIIcon>, IconProps>(function Icon(
    { label, ...restProps },
    forwardedRef
  ) {
    return label ? (
      <>
        {/* @ts-ignore */}
        <AccessibleIconPrimitive.Root label={label!}>
          <UIIcon
            as={iconComp as any}
            {...restProps}
            css={restProps.css as any}
            ref={forwardedRef}
          />
        </AccessibleIconPrimitive.Root>
      </>
    ) : (
      <UIIcon
        as={iconComp as any}
        {...restProps}
        aria-hidden="true"
        css={restProps.css as any}
        ref={forwardedRef}
      />
    )
  })

  return Icon
}

export const ChevronLeftIcon = createIcon(ChevronLeftIconPrimitive)
export const ChevronDownIcon = createIcon(ChevronDownIconPrimitive)
export const ChevronUpIcon = createIcon(ChevronUpIconPrimitive)
export const BellIcon = createIcon(BellIconPrimitive)
export const CheckIcon = createIcon(CheckIconPrimitive)
export const CloseIcon = createIcon(Cross1IconPrimitive)
export const RemoveIcon = createIcon(Cross2IconPrimitive)
export const LogoutIcon = createIcon(ExitIconPrimitive)
export const LoginIcon = createIcon(EnterIconPrimitive)
export const DeleteIcon = createIcon(TrashIconPrimitive)
export const NavigationIcon = createIcon(ArrowRightIconPrimitive)
export const SyncIcon = createIcon(UpdateIconPrimitive)
export const PlusIcon = createIcon(PlusIconPrimitive)
export const MinusIcon = createIcon(MinusIconPrimitive)
export const AccountIcon = createIcon(PersonIconPrimitive)
export const CursorArrowIcon = createIcon(CursorArrowIconPrimitive)
export const PencilIcon = createIcon(Pencil1IconPrimitive)
export const SourceIcon = createIcon(Link2IconPrimitive)
export const QuoteIcon = createIcon(QuoteIconPrimitive)
export const MoreVerticalIcon = createIcon(DotsVerticalIconPrimitive)
export const MenuIcon = createIcon(HamburgerMenuIconPrimitive)
export const SearchIcon = createIcon(MagnifyingGlassIconPrimitive)
export const LinkIcon = createIcon(ExternalLinkIconPrimitive)
export const TwitterIcon = createIcon(TwitterLogoIconPrimitive)
export const SettingsIcon = createIcon(GearIconPrimitive)
export const ResetIcon = createIcon(ResetIconPrimitive)
export const ExportIcon = createIcon(UploadIconPrimitive)
export const BackIcon = createIcon(ArrowLeftIconPrimitive)
export const ClipboardCopyIcon = createIcon(ClipboardCopyIconPrimitive)
export const GitHubLogoIcon = createIcon(GitHubLogoIconPrimitive)
export const SlashIcon = createIcon(SlashIconPrimitive)
export const ClearIcon = createIcon(CrossCircledIconPrimitive)
export const LinkedInIcon = createIcon(LinkedInLogoIconPrimitive)
export const MixIcon = createIcon(MixIconPrimitive)
export const TextIcon = createIcon(TextIconPrimitive)
export const EnvelopeClosedIcon = createIcon(EnvelopeClosedIconPrimitive)

/* Hero icons */

export const IdeaIcon = createIcon(
  React.forwardRef<SVGSVGElement>(function AnnotationIconPrimitive(props, ref) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
        ref={ref}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    )
  })
)

export const TagIcon = createIcon(
  React.forwardRef<SVGSVGElement>(function TagIconPrimitive(props, ref) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
          clipRule="evenodd"
        />
      </svg>
    )
  })
)

export const HelpIcon = createIcon(
  React.forwardRef<SVGSVGElement>(function HelpIconPrimitive(props, ref) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
        ref={ref}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    )
  })
)

export const CommandIcon = createIcon(
  React.forwardRef<SVGSVGElement>(function CommandIconPrimitive(props, ref) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        ref={ref}
      >
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
      </svg>
    )
  })
)

export const GoogleIcon = createIcon(
  React.forwardRef<SVGSVGElement>(function GoogleIconPrimitive(props, ref) {
    return (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="30px"
        height="30px"
        {...props}
        ref={ref}
      >
        {' '}
        <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
      </svg>
    )
  })
)
