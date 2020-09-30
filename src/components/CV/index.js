import React from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col, Avatar, Typography, Card, List } from 'antd'
import ProfilePic from '../../assets/me.png'
import './style.css'

const { Text } = Typography;
const { Meta } = Card;

const content = {
  name: "Kevin Erdiza Yogatama",
  about: "An aspiring individual that has several experiences in web, mobile, and game development using various tools and platform",
  projects: [
    {
      type: "group",
      title: "React Native projects",
      items: [
        {
          type: "project",
          title: "Mock QA platform mobile app",
          time: "August - September 2020",
          tools: [
            "react-native",
            "javascript"
          ]
        },
        {
          type: "project",
          title: "Mock MyAnimeList client mobile app",
          time: "July - August 2020",
          tools: [
            "react-native",
            "expo",
            "javascript"
          ]
        }
      ]
    },
    {
      type: "group",
      title: "Graphic Programming projects",
      items: [
        {
          type: "project",
          title: "Opengl animation",
          time: "August - September 2020",
          tools: [
            "c++",
            "opengl",
            "glsl/Shading Language"
          ]
        },
        {
          type: "project",
          title: "2D/3D art with Blender",
          time: "September 2020 - ongoing",
          tools: [
            "Blender"
          ]
        }
      ]
    },
    {
      type: "project",
      title: "Potions for Ruby",
      subtitle: "a game made with Godot engine",
      time: "May - June 2020",
      tools: [
        "godot",
        "gdscript"
      ]
    },
    {
      type: "project",
      title: "Savant",
      subtitle: "University's final year project",
      time: "August 2019 - April 2020",
      tools: [
        "Blender"
      ]
    }
  ],
  education: [
    {
      name: "Institut Teknologi Bandung",
      type: "university",
      time: "2015-2020"
    },
    {
      name: "SMANU MH Thamrin",
      type: "senior high school",
      time: "2012-2015"
    }
  ],
  experience: [
    {
      title: "Head of IT",
      "place": "event: Pemilu HMIF",
      time: "September 2017 - December 2017",
      "desc": "lorem ipsum"
    },
    {
      title: "Head of Gamedev community",
      "place": "Inkubator IT HMIF",
      time: "2018",
      "desc": "lorem ipsum"
    },
    {
      title: "Marketing Staff",
      "place": "Inkubator IT HMIF",
      time: "August 2016-2019",
      "desc": "lorem ipsum"
    }
  ],
  skills: [
    {
      title: "language",
      items: ["Javascript", "C++", "Python", "Java", "C#", "PHP", "perl"],
    },
    { title: "versioning", items: ["git"] },
    { title: "framework / lib", items: ["React", "React-native"] },
    { title: "design tools", items: ["figma"] },
    { title: "game_engine", items: ["Godot", "Unity"] },
    { title: "other", items: ["Blender", "Opengl", "Shading language"] }
  ],
  extra: [
    (<>
      Have decent skills and great interest in <Text strong>drawing</Text> and <Text strong>animation</Text>.
    </>),
    (<>
      Can speak and write in <Text strong>English</Text> and has been studying <Text strong>Japanese</Text> since December 2018
    </>)
  ]
}

const ProjectCard = (props) => {
  const { title, type } = props
  if (type === 'project') {
    return (
      <Card title={title} size='small'>
        <p>{type}</p>
      </Card>
    )
  } else if (type === 'group') {
    const { items } = props
    return (
      <Card title={title} size='small'>
        {items.map((v, i) => (
          <ProjectCard {...v} key={i} />
        ))}
      </Card>
    )
  } else {
    return (<Card size='small'>undefiend type</Card>)
  }
}

const Projects = () => {
  return (
    <List
      grid={{
        column: 2
      }}
      dataSource={content.projects}
      renderItem={ProjectCard}
      rowKey={(v,i) => i}
    />
  )
}

const SkillCard = (v) => {
  return (
    <>
      <Card size='small'>
        yes
      </Card>
    </>
  )
}

const ExtraCard = ({ value }) => (<Card size='small'>{value}</Card>)

const Skills = () => {
  return (
    <>
      <Card title='Technical skills' size='small'>
        {content.skills.map((v, i) => (
          <SkillCard {...v} key={i} />
        ))}
      </Card>
      <Card title='Extra skills' size='small'>
        {content.extra.map((v, i) => (
          <ExtraCard value={v} key={i} />
        ))}
      </Card>
    </>
  )
}

const Profile = () => {
  return (
    <>
      <Card>
        <Meta
          avatar={<Avatar src={ProfilePic} size={128} />}
          title={content.name}
          description={content.about}
        />
      </Card>
      <Card title='Education' size='small'>
        {content.education.map((v, i) => (
          <SkillCard {...v} key={i} />
        ))}
      </Card>
      <Card title='Experience' size='small'>
        {content.experience.map((v, i) => (
          <SkillCard {...v} key={i} />
        ))}
      </Card>
    </>
  )
}

const CV = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>keychera's CV</title>
      </Helmet>
      <Row align='center'>
        <Col span={6}>
          <Profile />
        </Col>
        <Col span={12}>
          <Projects />
        </Col>
        <Col span={6}>
          <Skills />
        </Col>
      </Row>

    </div>
  )
}


export default CV
