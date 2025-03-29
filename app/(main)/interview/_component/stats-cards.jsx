import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Trophy } from 'lucide-react';
import React from 'react'

const StatsCards = ({assessments}) => {
    const getAverageScore =()=>{
        if(!assessments.length) return 0;
        const total = assessments.reduce((sum,assessment)=>
            sum + assessment.quizScore,0
        )
        return (total /assessments.length).toFixed(1)
    }
    const getLatestAssessment = ()=>{
        if(!assessments?.length) return null;
        return assessments[0];
    }
    const getTotalQuestions=()=>{
        if(!assessments?.length) return 0;
        return assessments.reduce((sum,assessment)=>
        sum+assessment.questions.length,0)
    }
    console.log(getTotalQuestions())
  return (
    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-3'>
      {/*1 card  */}
        <Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium">Average Score</CardTitle>
    <Trophy className="h-4 w-4 text-muted-foreground" />
   
  </CardHeader>
  <CardContent>
  <div className="text-2xl font-bold">{getAverageScore()}%</div>
            <p className="text-xs text-muted-foreground">
             Accorss all assessments
            </p>
  </CardContent>
</Card>
{/* 2 card -Total questions*/}
<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium">Question Practiced</CardTitle>
    <Brain className="h-4 w-4 text-muted-foreground" />
   
  </CardHeader>
  <CardContent>
  <div className="text-2xl font-bold">{getTotalQuestions()}</div>
            <p className="text-xs text-muted-foreground">
             Total questions
            </p>
  </CardContent>
</Card>
{/* 3 card -Question Practiced*/}
<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium">Lastest Score</CardTitle>
    <Trophy className="h-4 w-4 text-muted-foreground" />
   
  </CardHeader>
  <CardContent>
  <div className="text-2xl font-bold">{getLatestAssessment()?.quizScore.toFixed(1) || 0}%</div>
            <p className="text-xs text-muted-foreground">
           Most recent Quiz
            </p>
  </CardContent>
</Card>
    </div>
  )
}

export default StatsCards
