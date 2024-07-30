import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { InitialContent } from './InitialContent'
import {
    RxFontBold,
    RxFontItalic,
    RxStrikethrough,
    RxCode,
    RxChevronDown,
    RxChatBubble,

} from "react-icons/rx"

export interface EditorProps { }

export function Editor() {
    const editor = useEditor({
        extensions: [
            StarterKit,


        ],
        content: InitialContent,
        editorProps: {
            attributes: {
                class: 'outline-none',
            }
        }
    })

    return (
        <>

            <EditorContent
                editor={editor}
                className="max-w-[700] mx-auto pt-16 prose prose-invert prose-emerald"
            />
            <div className='flex items-center'>
                {editor && (
                    <FloatingMenu
                        editor={editor}
                        className='bg-zinc-700 py-2 px-1 shadow-xl border gap-1 border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col'
                        shouldShow={({ state }) => {
                            const { $from } = state.selection

                            const currentLineText = $from.nodeBefore?.textContent

                            return currentLineText === '/'
                        }}
                    >
                        <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'>
                            <img className='w-10 border border-zinc-600 rounded'
                                src="https://www.notion.so/images/blocks/text/en-US.png"
                                alt="Text" />

                            <div className='flex flex-col text-left'>
                                <span className='text-sm'>Text</span>
                                <span className='text-xs text--zinc-400'>Just start writing with plain text.</span>
                            </div>
                        </button>
                        <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
                            onClick={() =>
                                editor.chain().focus().toggleHeading({ level: 1 }).run()
                            }
                        >
                            <img className='w-10 border border-zinc-600 rounded'
                                src="https://www.notion.so/images/blocks/header.57a7576a.png"
                                alt="Heading" />

                            <div className='flex flex-col text-left'>
                                <span className='text-sm'>Heading 1</span>
                                <span className='text-xs text--zinc-400'>Big section heading.</span>
                            </div>
                        </button>
                    </FloatingMenu>
                )}
                {editor && (
                    <BubbleMenu className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' editor={editor}>
                        <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600'>
                            <RxChevronDown className='w-4 h-4' />Text
                        </button>
                        <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600'>
                            <RxChatBubble className='w-4 h-4' />Comment
                        </button>
                        <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600' onClick={() => editor.chain().focus().toggleBold().run()} data-active={editor.isActive("bold")}>
                            <RxFontBold className='w-4 h-4' />
                        </button>
                        <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600' onClick={() => editor.chain().focus().toggleItalic().run()} data-active={editor.isActive("italic")}>
                            <RxFontItalic className='w-4 h-4' />
                        </button>
                        <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600' onClick={() => editor.chain().focus().toggleStrike().run()} data-active={editor.isActive("strike")}>
                            <RxStrikethrough className='w-4 h-4' />
                        </button>
                        <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600' onClick={() => editor.chain().focus().toggleCode().run()} data-active={editor.isActive("code")}>
                            <RxCode className='w-4 h-4' />
                        </button>
                    </BubbleMenu>
                )}
            </div>
        </>
    )
}