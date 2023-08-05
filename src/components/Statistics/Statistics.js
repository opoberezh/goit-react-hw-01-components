import {StatistList, Title, StatList, StatsItem, Label, Percentage,} from './Satistic.styled';
export const Statistics = ({title, stats}) => {
    return (
        <StatistList>
  <Title>{title}</Title>

  <StatList>
    {stats.map(item => 
      <StatsItem key={item.id}>
        <Label>{item.label}</Label>
        <Percentage>{item.percentage}%</Percentage>
      </StatsItem>         
        )
    }
   
  </StatList>
</StatistList>
    )
}