import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.length === 1 && (node.content[0].marks.find(item => item.type === 'code'))) {
        return <pre><code>{node.content[0].value}</code></pre>;
      }
    
      return <p>{children}</p>;
    }
  },
})

export default function PostBody({ content }) {
  return (
    <div className={markdownStyles['markdown']}>
      {documentToReactComponents(
        content.json,
        customMarkdownOptions(content)
      )}
    </div>
  )
}
