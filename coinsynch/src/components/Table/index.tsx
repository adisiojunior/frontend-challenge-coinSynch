import * as S from './styles'

type Props = {
  className?: string
  children: React.ReactNode
}

const Table: React.FC<Props> = ({ className, children }) => (
  <S.TableContainer className={className}>{children}</S.TableContainer>
)

export { Table }
