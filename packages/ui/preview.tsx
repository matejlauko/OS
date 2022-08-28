import { merge } from '@matejlauko/utils'
import * as React from 'react'
import {
  globalCss,
  resetStyles,
  globalStyles,
  createTheme as UICreateTheme,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertProps,
  Badge,
  BellIcon,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Heading,
  HoverCard,
  IconButton,
  Label,
  Link,
  List,
  ListItem,
  Panel,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  Select,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  TextArea,
  TextInput,
  Tooltip,
  UIProvider,
  VisuallyHidden,
} from './src'

const textVariants = {
  Variant: {
    prop: 'variant',
    options: ['normal', 'support', 'error', 'success'],
  },
  Color: {
    prop: 'color',
    options: ['text', 'accent', 'muted', 'muted2', 'muted3', 'muted4', 'contrast'],
  },
  Weight: {
    prop: 'weight',
    options: ['light', 'normal', 'medium', 'bold'],
  },
  Caps: {
    prop: 'caps',
    options: [true],
  },
  Size: {
    prop: 'size',
    options: ['xxs', 'xs', 'sm', 'base', 'md', 'lg', 'xl', 'xl2', 'xl3'],
  },
}

const components = {
  Button: {
    render: (props: any) => (
      <Button {...props} tone="accent">
        Button
      </Button>
    ),
    variants: {
      Variant: {
        prop: 'variant',
        options: ['primary', 'secondary', 'tertiary'],
      },
      Size: { prop: 'size', options: ['sm', 'md', 'lg'] },
      ['Primary Tone']: {
        prop: 'tone',
        options: [
          {
            name: 'accent',
            render: () => (
              <Button variant="primary" tone="accent">
                Button
              </Button>
            ),
          },
          {
            name: 'confirm',
            render: () => (
              <Button variant="primary" tone="confirm">
                Button
              </Button>
            ),
          },
          {
            name: 'destroy',
            render: () => (
              <Button variant="primary" tone="destroy">
                Button
              </Button>
            ),
          },
        ],
      },
      ['Secondary Tone']: {
        prop: 'tone',
        options: [
          {
            name: 'neutral',
            render: () => (
              <Button variant="secondary" tone="neutral">
                Button
              </Button>
            ),
          },
          {
            name: 'subtle',
            render: () => (
              <Button variant="secondary" tone="subtle">
                Button
              </Button>
            ),
          },
          {
            name: 'accent',
            render: () => (
              <Button variant="secondary" tone="accent">
                Button
              </Button>
            ),
          },
          {
            name: 'confirm',
            render: () => (
              <Button variant="secondary" tone="confirm">
                Button
              </Button>
            ),
          },
          {
            name: 'destroy',
            render: () => (
              <Button variant="secondary" tone="destroy">
                Button
              </Button>
            ),
          },
        ],
      },
      ['Tertiary Tone']: {
        prop: 'tone',
        options: [
          {
            name: 'neutral',
            render: () => (
              <Button variant="tertiary" tone="neutral">
                Button
              </Button>
            ),
          },
          {
            name: 'subtle',
            render: () => (
              <Button variant="tertiary" tone="subtle">
                Button
              </Button>
            ),
          },
          {
            name: 'accent',
            render: () => (
              <Button variant="tertiary" tone="accent">
                Button
              </Button>
            ),
          },
          {
            name: 'confirm',
            render: () => (
              <Button variant="tertiary" tone="confirm">
                Button
              </Button>
            ),
          },
          {
            name: 'destroy',
            render: () => (
              <Button variant="tertiary" tone="destroy">
                Button
              </Button>
            ),
          },
        ],
      },
    },
  },
  ['Icon Button']: {
    render: (props: any) => (
      <IconButton {...props}>
        <BellIcon />
      </IconButton>
    ),
    variants: {
      Variant: {
        prop: 'variant',
        options: ['primary', 'secondary', 'tertiary'],
      },
      Size: { prop: 'size', options: ['sm', 'md', 'lg', 'xl'] },
      ['Primary Tone']: {
        prop: 'tone',
        options: [
          {
            name: 'accent',
            render: () => (
              <IconButton variant="primary" tone="accent">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'confirm',
            render: () => (
              <IconButton variant="primary" tone="confirm">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'destroy',
            render: () => (
              <IconButton variant="primary" tone="destroy">
                <BellIcon />
              </IconButton>
            ),
          },
        ],
      },
      ['Secondary Tone']: {
        prop: 'tone',
        options: [
          {
            name: 'neutral',
            render: () => (
              <IconButton variant="secondary" tone="neutral">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'subtle',
            render: () => (
              <IconButton variant="secondary" tone="subtle">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'accent',
            render: () => (
              <IconButton variant="secondary" tone="accent">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'confirm',
            render: () => (
              <IconButton variant="secondary" tone="confirm">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'destroy',
            render: () => (
              <IconButton variant="secondary" tone="destroy">
                <BellIcon />
              </IconButton>
            ),
          },
        ],
      },
      ['Tertiary Tone']: {
        prop: 'tone',
        options: [
          {
            name: 'neutral',
            render: () => (
              <IconButton variant="tertiary" tone="neutral">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'subtle',
            render: () => (
              <IconButton variant="tertiary" tone="subtle">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'accent',
            render: () => (
              <IconButton variant="tertiary" tone="accent">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'confirm',
            render: () => (
              <IconButton variant="tertiary" tone="confirm">
                <BellIcon />
              </IconButton>
            ),
          },
          {
            name: 'destroy',
            render: () => (
              <IconButton variant="tertiary" tone="destroy">
                <BellIcon />
              </IconButton>
            ),
          },
        ],
      },
    },
  },
  ['Text Input']: {
    render: (props: any) => <TextInput {...props} placeholder="Input" />,
    variants: {
      Variant: { prop: 'variant', options: ['outline', 'ghost', 'invisible'] },
      Size: { prop: 'size', options: ['sm', 'md', 'lg'] },
      State: { prop: 'state', options: ['default', 'invalid'] },
      'Full Width': { prop: 'fullWidth', options: [true, false] },
    },
  },
  ['Text Area']: {
    render: (props: any) => <TextArea {...props} placeholder="Text Area" />,
    variants: {
      Variant: { prop: 'variant', options: ['outline', 'ghost', 'invisible'] },
      Size: { prop: 'size', options: ['sm', 'md', 'lg'] },
      State: { prop: 'state', options: ['default', 'invalid'] },
    },
  },
  Select: {
    render: (props: any) => (
      <Select defaultValue="one" {...props}>
        <option value="one">One</option>
        <option value="two">Two</option>
      </Select>
    ),
  },
  Alert: {
    render: (props?: AlertProps) => <Alert {...props}>Alert Text</Alert>,
    variants: {
      variant: { prop: 'variant', options: ['info', 'success', 'error', 'warning'] },
      size: { prop: 'size', options: ['1'] },
    },
  },
  Switch: {
    render: (props: any) => <Switch {...props} />,
  },
  ['Radio Group']: {
    render: (props: any) => (
      <RadioGroup {...props}>
        <RadioGroupItem value="one" />
        <RadioGroupItem value="two" />
      </RadioGroup>
    ),
  },
  Accessibility: {
    variants: {
      VisuallyHidden: {
        options: [
          { name: 'Hidden', render: () => <VisuallyHidden>Visually Hidden</VisuallyHidden> },
        ],
      },
    },
  },
  Accordion: {
    render: (props: any) => (
      <Accordion type="multiple">
        <AccordionItem value="1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  Dialog: {
    render: () => (
      <Dialog>
        <DialogTrigger>
          <button>Open Dialog</button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Dialog</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogContent>
      </Dialog>
    ),
  },
  ['Dropdown Menu']: {
    render: () => (
      <DropdownMenu
        content={
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>Item</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => alert('Item 2 selected')} disabled>
                Item 2
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel>Label</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>Item</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => alert('Item 2 selected')}>Item 2</DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        }
      >
        <button>Open Dropdown</button>
      </DropdownMenu>
    ),
  },
  Text: {
    render: (props: any) => <Text {...props}>Text</Text>,
    variants: textVariants,
  },
  Heading: {
    render: (props: any) => <Heading {...props}>Heading</Heading>,
    variants: textVariants,
  },
  Label: {
    render: () => <Label>Label</Label>,
  },
  ['Hover Card']: {
    render: () => (
      <HoverCard content={<div>Content</div>}>
        <div>Hover me</div>
      </HoverCard>
    ),
  },
  Link: {
    render: (props: any) => <Link {...props}>Link</Link>,
  },
  List: {
    render: () => (
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    ),
  },
  Popover: {
    render: () => (
      <Popover>
        <PopoverTrigger asChild>
          <button>Open Popover</button>
        </PopoverTrigger>

        <PopoverContent>fds fds fsd fsad fasd fasf sa f</PopoverContent>
      </Popover>
    ),
  },
  Tabs: {
    render: () => (
      <Tabs>
        <TabsList aria-label="Unstyled tabs example">
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>

        <TabsContent value="one">First content</TabsContent>

        <TabsContent value="two">Second content</TabsContent>
      </Tabs>
    ),
  },
  Tooltip: {
    render: () => (
      <Tooltip content="Tooltip content">
        <div>hover me</div>
      </Tooltip>
    ),
  },
  Panel: {
    render: () => <Panel>Panel</Panel>,
  },
  Badge: {
    render: (props: any) => <Badge {...props}>Badge</Badge>,
    variants: {
      Color: { prop: 'color', options: ['green', 'yellow', 'crimson', 'blue'] },
    },
  },
}

export default components

export const Provider = ({ children }: React.PropsWithChildren) => {
  React.useEffect(() => {
    globalCss(resetStyles)()
    globalCss(globalStyles)()
  }, [])

  return <UIProvider>{children}</UIProvider>
}

export const createTheme = (_tokens: {}, themeStore: { tokens: {} }) => {
  return UICreateTheme(merge({}, themeStore.tokens, _tokens) as any)
}
