import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { InitialContent } from './InitialContent'


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
        <EditorContent
            editor={editor}
            className="max-w-[700] mx-auto pt-16 prose prose-emerald"
        />


    )
}